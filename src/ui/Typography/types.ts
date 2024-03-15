import { CustomTheme } from '@config/theme'

export interface TypographyProps {
  as?: React.ElementType
  children?: React.ReactNode
  size?: keyof CustomTheme['fontSizes']
  weight?: keyof CustomTheme['fontWeight']
  gutterTop?: keyof CustomTheme['space']
  gutterBottom?: keyof CustomTheme['space']
  color?: string
  className?: string
  truncated?: boolean
  /** Identification for tests */
  testId?: string
}

export type STypographyProps = Omit<TypographyProps, 'gutterTop' | 'gutterBottom'> & {
  $gutterTop: keyof CustomTheme['space']
  $gutterBottom: keyof CustomTheme['space']
}
