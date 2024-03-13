import { SButton } from './styled'
import { ButtonProps } from './types'

const Button = ({
  id,
  label,
  variant = 'primary',
  onClick,
  icon: Icon,
  isDisabled = false,
  isLoading = false,
  testId,
  className,
  ...props
}: ButtonProps) => {
  return (
    <SButton
      disabled={isDisabled}
      onClick={isDisabled ?? isLoading ? undefined : onClick}
      id={id}
      variant={variant}
      className={className}
      data-testid={testId}
      type="button"
      {...props}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {Icon && Icon}
          {label && <span>{label}</span>}
        </>
      )}
    </SButton>
  )
}

export default Button
