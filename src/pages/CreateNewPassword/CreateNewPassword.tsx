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
  password: string
  passwordConfirm: string
}

const schema = yup
  .object({
    password: yup
      .string()
      .min(8, 'Password should be at least 8 characters')
      .required('Password is required'),
    passwordConfirm: yup
      .string()
      .min(8, 'Password should be at least 8 characters')
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Password is required'),
  })
  .required()

const CreateNewPassword = () => {
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
        <title>Create new Password</title>
      </Helmet>
      <Icon name={'Qencode'} />
      <Typography as={'h1'} size="lg" weight="semiBold" gutterTop={10} gutterBottom={5}>
        Create new Password?
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrapper>
          <Input
            {...register('password')}
            type="password"
            label="Password"
            placeholder="Password"
            autocomplete="current-password"
            errorMessage={errors.password?.message}
          />
          <Input
            {...register('passwordConfirm')}
            type="password"
            label="Confirm Password"
            placeholder="Password"
            autocomplete="new-password"
            errorMessage={errors.passwordConfirm?.message}
          />
        </InputsWrapper>
        <Actions>
          <Button type="submit" width="100%" label="Reset Password" />
        </Actions>
      </Form>
    </AuthWrapper>
  )
}

export default CreateNewPassword
