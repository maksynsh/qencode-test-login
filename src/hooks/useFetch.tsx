import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from './useAuth'
import { AuthData } from '@providers/Auth'

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

const apiCall = async (urlString: string, init: AxiosRequestConfig): Promise<AxiosResponse> => {
  try {
    return await axios(urlString, init)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error('An unexpected error occurred')
    }
  }
}

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

  const fetchNewToken = useCallback(async () => {
    try {
      const url = `${import.meta.env.VITE_API_BASE_URL}/v1/auth/login`

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
    } catch (error) {
      logout()
      return false
    }

    logout()
    return false
  }, [])

  const query = useCallback<(params?: QueryOptions<TVariables>) => Promise<ReturnResult<TData>>>(
    (params = {}) => {
      const { headers = {}, payload } = params

      setLoading(true)
      setError(undefined)
      setData(undefined)
      setCalled(true)

      const fetchData = async () => {
        let response
        let currentError

        try {
          const queryHeaders = {
            'Content-Type': 'application/json',
            Authorization: token && `Bearer ${token}`,
            ...initHeaders,
            ...headers,
          }

          const url = `${import.meta.env.VITE_API_BASE_URL}${queryString}`

          const urlString = url.toString()

          const config: AxiosRequestConfig = {
            method,
            headers: queryHeaders,
            data: payload,
          }

          response = await apiCall(urlString, config)

          const checkRefetchToken = async (res: AxiosResponse) => {
            if (res?.status !== 401) {
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

          await checkRefetchToken(response)

          if (response.data) {
            setData(response.data as TData)
          }
        } catch (err) {
          if (err instanceof Error) {
            currentError = err.message
          } else {
            currentError = 'Unexpected error. Try again later'
          }
          setError(currentError)
        } finally {
          setLoading(false)
        }

        return {
          data,
          error: currentError,
        }
      }

      return fetchData()
    },
    [queryString],
  )

  let result: ExecutionResult<TData>

  if (!called || loading || error) {
    result = {
      data,
      error,
      loading,
      called,
    }
  } else {
    result = {
      data,
      error,
      loading,
      called,
    }
  }
  return [query, result]
}
