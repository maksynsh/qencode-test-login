import Button from '@ui/Button'
import Icon from '@ui/Icon'
import Typography from '@ui/Typography'
import Input from '@ui/Input'
import AuthWidget from '@components/AuthWidget'

import { Actions, InputsWrapper } from './styled'

const CreateNewPassword = () => {
  return (
    <AuthWidget>
      <Icon name={'Qencode'} />
      <Typography as={'h1'} size="lg" weight="semiBold" gutterTop={10} gutterBottom={5}>
        Create new password?
      </Typography>
      <InputsWrapper>
        <Input type="password" label="Password" placeholder="Password" />
        <Input type="password" label="Confirm Password" placeholder="Password" />
      </InputsWrapper>
      <Actions>
        <Button width="100%" label="Reset Password" />
      </Actions>
    </AuthWidget>
  )
}

export default CreateNewPassword
