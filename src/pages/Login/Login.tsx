import Button from '@ui/Button'
import Icon from '@ui/Icon'
import Typography from '@ui/Typography'
import Input from '@ui/Input'
import AuthWidget from '@components/AuthWidget'

import { CloudLoginButtons, SDivider, InputsWrapper, SLink } from './styled'

const Login = () => {
  return (
    <AuthWidget>
      <Icon name={'Qencode'} />
      <Typography as={'h1'} size="lg" weight="semiBold" gutterTop={10} gutterBottom={5}>
        Log in to your account
      </Typography>
      <CloudLoginButtons>
        <Button label="Google" variant="secondary" icon={<Icon name="Google" />} width="100%" />
        <Button label="Github" variant="secondary" icon={<Icon name="Github" />} width="100%" />
      </CloudLoginButtons>
      <SDivider label="Or" />
      <InputsWrapper>
        <Input placeholder="Work email" />
        <Input placeholder="Password" type="password" />
      </InputsWrapper>
      <SLink to="/forgot-password">
        <Typography as={'p'} size="sm" weight="medium" color="primary">
          Forgot your password?
        </Typography>
      </SLink>
      <Button width="100%" label="Log in to Qencode" />
      <Typography as={'p'} size="sm" weight="medium" color="grey" gutterTop={3}>
        Is your company new to Qencode?{' '}
        <Typography as={'span'} size="sm" weight="medium" color="primary">
          Sign up
        </Typography>
      </Typography>
    </AuthWidget>
  )
}

export default Login
