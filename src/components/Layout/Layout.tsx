import { Outlet } from 'react-router-dom'

import { Main } from './styled'

const Layout = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  )
}

export default Layout
