import { Helmet } from 'react-helmet'

import Button from '@ui/Button'
import Icon from '@ui/Icon'
import Typography from '@ui/Typography'
import Input from '@ui/Input'
import AuthWrapper from '@components/AuthWrapper'

import { Actions, InputsWrapper } from './styled'

const CreateNewPassword = () => {
  return (
    <AuthWrapper>
      <Helmet>
        <title>Create new Password</title>
      </Helmet>
      <Icon name={'Qencode'} />
      <Typography as={'h1'} size="lg" weight="semiBold" gutterTop={10} gutterBottom={5}>
        Create new Password?
      </Typography>
      <InputsWrapper>
        <Input
          type="password"
          label="Password"
          placeholder="Password"
          autocomplete="current-password"
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Password"
          autocomplete="new-password"
        />
      </InputsWrapper>
      <Actions>
        <Button width="100%" label="Reset Password" />
      </Actions>
    </AuthWrapper>
  )
}

export default CreateNewPassword
