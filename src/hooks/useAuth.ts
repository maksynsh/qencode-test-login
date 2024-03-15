import { useContext } from 'react'

import { AuthContext } from '@providers/Auth'

export const useAuth = () => {
  return useContext(AuthContext)
}
