import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  isAxiosError,
} from 'axios'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthData } from '@providers/Auth'
import showAlert from '@utils/showAlert'
import pathsService from '@utils/pathsService'
import { useAuth } from './useAuth'

type OperationVariables = Record<string, any>

type FetchTokenResult = OperationVariables & AuthData

interface QueryOptions<TVariables extends OperationVariables> {
  headers?: AxiosRequestHeaders
  payload?: TVariables
  method?: string
}

interface ExecutionResult<TData> {
  data?: TData
  error?: string
  loading: boolean
  called: boolean
}

type ReturnResult<TData> = Pick<ExecutionResult<TData>, 'data' | 'error'>

type UseFetchType<TData extends OperationVariables, TVariables extends OperationVariables> = [
  (options?: QueryOptions<TVariables>) => Promise<ReturnResult<TData>>,
  ExecutionResult<TData>,
]

const apiCall = async (urlString: string, init: AxiosRequestConfig): Promise<AxiosResponse> =>
  await axios(urlString, init)

export const useFetch = <TData extends OperationVariables, TVariables extends OperationVariables>(
  queryString: string,
  options: Omit<QueryOptions<TVariables>, 'payload'> = {},
): UseFetchType<TData, TVariables> => {
  const { headers: initHeaders = {}, method } = options
  const navigate = useNavigate()

  const { setData: setAuth, token, refreshToken, logout } = useAuth()

  const [loading, setLoading] = useState(false)
  const [called, setCalled] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [data, setData] = useState<TData>()

  // Helper function to retrieve new access token using refresh token
  const fetchNewToken = useCallback(async () => {
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}${pathsService.getRefreshTokenPath()}`

      const config: AxiosRequestConfig = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          refresh_token: refreshToken,
        },
      }

      const { data } = await axios<FetchTokenResult>(url, config)

      if (data.error == 0) {
        setAuth(data)
        return true
      }
    } catch (err) {
      let currentError
      if (err instanceof Error) {
        currentError = 'Error refreshing token: ' + err.message
      } else {
        currentError = 'Error refreshing token! Try again later.'
      }

      showAlert(currentError, { type: 'error' })
      logout()
      return false
    }

    logout()
    return false
  }, [])

  // Callback function for making a request
  const query = useCallback<(params?: QueryOptions<TVariables>) => Promise<ReturnResult<TData>>>(
    (params = {}) => {
      const { headers = {}, payload } = params

      // 1) Initialize query
      setLoading(true)
      setError(undefined)
      setData(undefined)
      setCalled(true)

      // 2) Create function to fetch data
      const fetchData = async () => {
        let response
        let currentError

        const url = `${import.meta.env.VITE_API_BASE_URL}${queryString}`

        const urlString = url.toString()

        // Define the request headers
        const requestHeaders = {
          'Content-Type': 'application/json',
          Authorization: token && `Bearer ${token}`,
          ...initHeaders,
          ...headers,
        }

        // Complete request config
        const config: AxiosRequestConfig = {
          method,
          headers: requestHeaders,
          data: payload,
        }

        try {
          // API call
          response = await apiCall(urlString, config)

          if (response.data) {
            setData(response.data as TData)
          }
        } catch (err) {
          /* Declare function to check the error. And in case request failed with status 401:
          refetch token and try API call again */
          const checkRefetchToken = async (err: AxiosError) => {
            if (err.response?.status !== 401) {
              return
            }

            const isFetched = await fetchNewToken()

            if (!isFetched) {
              navigate('/login')
              return
            }

            response = await apiCall(urlString, config)

            if (response.status !== 200) {
              navigate('/login')
            }
          }

          // Handle error
          if (isAxiosError(err)) {
            await checkRefetchToken(err)
            currentError = err.message
          } else {
            currentError = 'Unexpected error. Try again later'
          }

          showAlert(currentError, { type: 'error' })
          setError(currentError)
        } finally {
          // In any case set loading state to false
          setLoading(false)
        }

        // Return object containing data or error
        return {
          data: response?.data as TData | undefined,
          error: currentError,
        }
      }

      // 3) Return callback function for fetching
      return fetchData()
    },
    [queryString],
  )

  const result: ExecutionResult<TData> = {
    data,
    error,
    loading,
    called,
  }

  // Hook returns callback query and  result (state of execution)
  return [query, result]
}
