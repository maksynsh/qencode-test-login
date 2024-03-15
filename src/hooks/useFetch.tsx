import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLocalStorage } from './useLocalStorage'

type OperationVariables = Record<string, any>

interface FetchTokenResult extends OperationVariables {
  access_token: string
  refresh_token: string
  token_expire: number
  refresh_token_expire: number
}

interface QueryOptions<TVariables extends OperationVariables> {
  headers?: AxiosRequestHeaders
  payload?: TVariables | object
  method?: string
}

interface ExecutionResult<TData> {
  data?: TData
  error?: string
  loading: boolean
  called: boolean
}

type ResponseData<TData> = Pick<ExecutionResult<TData>, 'data' | 'error'>

type UseFetchType<TData extends OperationVariables, TVariables extends OperationVariables> = [
  (options?: QueryOptions<TVariables>) => Promise<ResponseData<TData>>,
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

  const [token, setToken] = useLocalStorage<string | null>({
    key: 'access_token',
    initialValue: null,
  })
  const [refreshToken, setRefreshToken] = useLocalStorage<string | null>({
    key: 'refresh_token',
    initialValue: null,
  })

  const [loading, setLoading] = useState(false)
  const [called, setCalled] = useState(false)
  const [error, setError] = useState<string | undefined>()
  const [data, setData] = useState<TData>()

  const fetchNewToken = useCallback(async () => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/v1/auth/login`

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

      if (data.error === '0') {
        setToken(data.access_token)
        setRefreshToken(data.refresh_token)

        return true
      }
    } catch (error) {
      setToken(null)
      setRefreshToken(null)

      return false
    }

    setToken(null)
    setRefreshToken(null)
    return false
  }, [])

  const query = useCallback<(params?: QueryOptions<TVariables>) => Promise<ResponseData<TData>>>(
    (params = {}) => {
      const { headers = {}, payload } = params

      setLoading(true)
      setError(undefined)
      setData(undefined)
      setCalled(true)

      const fetchData = async () => {
        let response

        try {
          const queryHeaders = {
            'Content-Type': 'application/json',
            Authorization: token && `Bearer ${token}`,
            ...initHeaders,
            ...headers,
          }

          const url = `${import.meta.env.VITE_BASE_URL}${queryString}`

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
          console.log(`error`, err)

          setLoading(false)
          setError(err as string)
        }
        try {
          setLoading(false)
          setError(undefined)
        } catch (err) {
          console.log(`error`, err)
        }

        return {
          data,
          error,
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
