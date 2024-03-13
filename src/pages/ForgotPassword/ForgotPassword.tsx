import { Helmet } from 'react-helmet'

import Button from '@ui/Button'
import Icon from '@ui/Icon'
import Typography from '@ui/Typography'
import Input from '@ui/Input'
import AuthWidget from '@components/AuthWidget'

import { Actions, InputsWrapper } from './styled'

const ForgotPassword = () => {
  return (
    <AuthWidget>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <Icon name={'Qencode'} />
      <Typography as={'h1'} size="lg" weight="semiBold" gutterTop={10} gutterBottom={5}>
        Forgot Password?
      </Typography>
      <InputsWrapper>
        <Input placeholder="Enter your email" />
      </InputsWrapper>
      <Actions>
        <Button width="100%" label="Send" />
        <Button variant="secondary" width="100%" label="Cancel" />
      </Actions>
    </AuthWidget>
  )
}

export default ForgotPassword
