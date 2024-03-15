import { Helmet } from 'react-helmet'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import Button from '@ui/Button'
import Icon from '@ui/Icon'
import Typography from '@ui/Typography'
import Input from '@ui/Input'
import AuthWrapper from '@components/AuthWrapper'
import Form from '@components/Form'
import { useAuth } from '@hooks/useAuth'
import { AuthData } from '@providers/Auth'
import { useFetch } from '@hooks/useFetch'

import { CloudLoginButtons, SDivider, InputsWrapper, SLink } from './styled'

export interface FormInput {
  email: string
  password: string
}

const schema = yup
  .object({
    email: yup.string().trim().email('Provide a valid email').required('Email is required'),
    password: yup.string().min(8, 'Password should be at least 8 characters').required(),
  })
  .required()

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  })

  const [query, { loading }] = useFetch<AuthData, FormInput>('/v1/auth/login', {
    method: 'POST',
  })

  const { setData } = useAuth()

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const res = await query({ payload: data })

    if (res.data) {
      setData(res.data)
      navigate('/')
    }
  }

  return (
    <AuthWrapper>
      <Helmet>
        <title>Log in to your account</title>
      </Helmet>
      <Icon name={'Qencode'} />
      <Typography as={'h1'} size="lg" weight="semiBold" gutterTop={10} gutterBottom={5}>
        Log in to your account
      </Typography>
      <CloudLoginButtons>
        <Button label="Google" variant="secondary" icon={<Icon name="Google" />} width="100%" />
        <Button label="Github" variant="secondary" icon={<Icon name="Github" />} width="100%" />
      </CloudLoginButtons>
      <SDivider label="Or" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrapper>
          <Input
            {...register('email')}
            placeholder="Work email"
            autocomplete="email"
            errorMessage={errors.email?.message}
          />
          <Input
            {...register('password')}
            placeholder="Password"
            type="password"
            autocomplete="current-password"
            errorMessage={errors.password?.message}
          />
        </InputsWrapper>
        <SLink to="/forgot-password">
          <Typography as={'p'} size="sm" weight="medium" color="primary">
            Forgot your password?
          </Typography>
        </SLink>
        <Button type="submit" width="100%" label="Log in to Qencode" isLoading={loading} />
      </Form>
      <Typography as={'p'} size="sm" weight="medium" color="grey" gutterTop={3}>
        Is your company new to Qencode?{' '}
        <Typography as={'span'} size="sm" weight="medium" color="primary">
          Sign up
        </Typography>
      </Typography>
    </AuthWrapper>
  )
}

export default Login
