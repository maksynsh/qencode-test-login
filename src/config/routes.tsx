import { RouteProps } from 'react-router-dom'

import Home from '@pages/Home'
import Login from '@pages/Login'
import ForgotPassword from '@pages/ForgotPassword'
import CreateNewPassword from '@pages/CreateNewPassword'

type RouteType = RouteProps & {
  protect?: boolean
}

const routes: RouteType[] = [
  {
    path: '/',
    element: <Home />,
    protect: true,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: '/create-new-password/:secret?/:token?',
    element: <CreateNewPassword />,
  },
  {
    path: '*',
    element: <h1>404 | Page not found!</h1>,
  },
]

export default routes
