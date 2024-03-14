import { CustomTheme } from '@lib/theme'

export interface ButtonProps {
  id?: string
  label?: string
  type?: 'button' | 'submit'
  width?: string
  fontSize?: keyof CustomTheme['fontSizes']
  variant?: 'primary' | 'secondary'
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  testId?: string
  icon?: React.ReactNode
}
