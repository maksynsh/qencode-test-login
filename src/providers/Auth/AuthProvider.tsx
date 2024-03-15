/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLocalStorage } from '@hooks/useLocalStorage'

export interface AuthData {
  access_token: string | null
  refresh_token: string | null
  token_expire: string | null
  refresh_token_expire: string | null
}

interface AuthValues {
  token: string | null
  refreshToken: string | null
  setData: (data: AuthData) => void
  logout: () => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthValues>({
  token: null,
  refreshToken: null,
  setData: () => {},
  logout: () => {},
})

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useLocalStorage<string | null>({
    key: 'access_token',
    initialValue: null,
  })
  const [refreshToken, setRefreshToken] = useLocalStorage<string | null>({
    key: 'refresh_token',
    initialValue: null,
  })
  const setTokenExpiresIn = useLocalStorage<string | null>({
    key: 'token_expire',
    initialValue: null,
  })[1]
  const setRefreshTokenExpiresIn = useLocalStorage<string | null>({
    key: 'refresh_token_expire',
    initialValue: null,
  })[1]

  const navigate = useNavigate()

  const setData = ({
    access_token,
    refresh_token,
    token_expire,
    refresh_token_expire,
  }: AuthData) => {
    setToken(access_token)
    setRefreshToken(refresh_token)
    setTokenExpiresIn(token_expire)
    setRefreshTokenExpiresIn(refresh_token_expire)
  }

  const logout = () => {
    setToken(null)
    setRefreshToken(null)
    setTokenExpiresIn(null)
    setRefreshTokenExpiresIn(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ token, refreshToken, setData, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
