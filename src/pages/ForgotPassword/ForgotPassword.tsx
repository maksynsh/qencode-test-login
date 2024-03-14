import { Helmet } from 'react-helmet'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from '@ui/Button'
import Icon from '@ui/Icon'
import Typography from '@ui/Typography'
import Input from '@ui/Input'
import AuthWrapper from '@components/AuthWrapper'
import Form from '@components/Form'

import { Actions, InputsWrapper } from './styled'

interface FormInput {
  email: string
}

const schema = yup
  .object({
    email: yup.string().email('Provide a valid email').required('Email is required'),
  })
  .required()

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data)
  }

  return (
    <AuthWrapper>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <Icon name={'Qencode'} />
      <Typography as={'h1'} size="lg" weight="semiBold" gutterTop={10} gutterBottom={5}>
        Forgot Password?
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrapper>
          <Input
            {...register('email')}
            placeholder="Enter your email"
            autocomplete="email"
            errorMessage={errors.email?.message}
          />
        </InputsWrapper>
        <Actions>
          <Button type="submit" width="100%" label="Send" />
          <Button to={'/'} variant="secondary" width="100%" label="Cancel" />
        </Actions>
      </Form>
    </AuthWrapper>
  )
}

export default ForgotPassword
