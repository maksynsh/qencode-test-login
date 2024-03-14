import { useNavigate } from 'react-router-dom'
import { SButton } from './styled'
import { ButtonProps } from './types'

const Button = ({
  id,
  label,
  type = 'button',
  variant = 'primary',
  onClick,
  icon: Icon,
  isDisabled = false,
  isLoading = false,
  testId,
  className,
  to,
  ...props
}: ButtonProps) => {
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (to) navigate(to)
    if (onClick) onClick(e)
  }

  return (
    <SButton
      disabled={isDisabled}
      onClick={isDisabled ?? isLoading ? undefined : handleClick}
      id={id}
      variant={variant}
      className={className}
      data-testid={testId}
      type={type}
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
