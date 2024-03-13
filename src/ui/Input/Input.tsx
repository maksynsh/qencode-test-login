import React, { useState, useCallback } from 'react'

import { EyeClosedIcon, EyeIcon } from '@ui/Icon'
import Typography from '@ui/Typography'

import { SLabelWrapper, SFieldWrapper, SInput, SIconWrapper, SError, Container } from './styled'
import { InputProps } from './types'
import { INPUT_TYPE } from './constants'

const PasswordIcon = ({ isHidden }: { isHidden: boolean }) =>
  isHidden ? <EyeClosedIcon /> : <EyeIcon />

const Input = ({
  label,
  onChange,
  className,
  placeholder,
  type = 'text',
  errorMessage,
  value,
  autocomplete,
  isDisabled,
  width,
}: InputProps) => {
  const [hidden, setHidden] = useState(true)
  const isPasswordType = type === INPUT_TYPE.PASSWORD
  const passwordToggle = hidden ? INPUT_TYPE.PASSWORD : INPUT_TYPE.TEXT
  const hasError = errorMessage

  const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e)
  }, [])

  let iconRight

  if (isPasswordType) {
    iconRight = <PasswordIcon isHidden={hidden} />
  }

  if (hasError) {
    iconRight = '(!)'
  }

  return (
    <Container className={className} width={width}>
      {label && (
        <>
          <SLabelWrapper>
            <Typography as="label" color="grey" size="md" weight="medium">
              {label}
            </Typography>
          </SLabelWrapper>
        </>
      )}
      <SFieldWrapper>
        <SInput
          placeholder={placeholder}
          label={label}
          onChange={onInputChange}
          disabled={isDisabled}
          $hasError={!!hasError}
          $hasIconRight={!!iconRight || isPasswordType}
          value={value}
          type={isPasswordType ? passwordToggle : type}
          autocomplete={autocomplete}
        />

        {iconRight && (
          <SIconWrapper
            onClick={isPasswordType ? () => setHidden(!hidden) : undefined}
            $hasError={!!hasError}
          >
            {iconRight}
          </SIconWrapper>
        )}
      </SFieldWrapper>

      {hasError && errorMessage && <SError>{errorMessage}</SError>}
    </Container>
  )
}

export default Input
