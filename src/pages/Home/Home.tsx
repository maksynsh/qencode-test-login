import Button from '@ui/Button'
import { useAuth } from '@hooks/useAuth'

const Home = () => {
  const { logout } = useAuth()
  return (
    <>
      <Button label="Log out" onClick={logout} />
    </>
  )
}

export default Home
