import { STypography } from './styled'
import { TypographyProps } from './types'

const Typography = ({
  as = 'div',
  size = 'md',
  children,
  weight = 'regular',
  gutterTop,
  gutterBottom,
  className,
  color,
  truncated = false,
  testId,
  ...props
}: TypographyProps) => (
  <STypography
    as={as}
    color={color}
    size={size}
    weight={weight}
    $gutterTop={gutterTop}
    $gutterBottom={gutterBottom}
    className={className}
    truncated={truncated ? 1 : 0}
    data-testid={testId}
    {...props}
  >
    {children}
  </STypography>
)

export default Typography
