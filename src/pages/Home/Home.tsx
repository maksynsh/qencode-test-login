import Button from '@ui/Button'
import { useAuth } from '@hooks/useAuth'
import { Header } from './styled'
import Typography from '@ui/Typography'

const Home = () => {
  const { logout } = useAuth()

  return (
    <Header>
      <Typography weight="medium" size="md" color="grey">
        Hello, User!
      </Typography>
      <Button label="Log out" onClick={logout} size="small" />
    </Header>
  )
}

export default Home
