import { Helmet } from 'react-helmet'
import { useNavigate, useParams } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from '@ui/Button'
import Icon from '@ui/Icon'
import Typography from '@ui/Typography'
import Input from '@ui/Input'
import AuthWrapper from '@components/AuthWrapper'
import Form from '@components/Form'
import { useFetch } from '@hooks/useFetch'
import showAlert from '@utils/showAlert'

import { Actions, InputsWrapper } from './styled'

interface FormInput {
  password: string
  passwordConfirm: string
}

interface RequestBody {
  token?: string
  secret?: string
  password: string
  password_confirm: string
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

  const [query, { loading }] = useFetch<object, RequestBody>('/v1/auth/password-set', {
    method: 'POST',
  })

  const { token, secret } = useParams()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormInput> = async ({ password, passwordConfirm }) => {
    const res = await query({
      payload: {
        token: token,
        secret: secret,
        password,
        password_confirm: passwordConfirm,
      },
    })

    if (!res.error) {
      showAlert('Password updated successfully!', { type: 'success' })
      navigate('/')
    }
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
          <Button type="submit" width="100%" label="Reset Password" isLoading={loading} />
        </Actions>
      </Form>
    </AuthWrapper>
  )
}

export default CreateNewPassword
