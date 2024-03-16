import styled from 'styled-components'

import { CustomTheme } from '@config/theme'
import { STypographyProps } from './types'

export const STypography = styled.p<STypographyProps>`
  font-size: ${({ size, theme }) => theme.fontSizes[size ?? 'md']};
  margin-top: ${({ $gutterTop, theme }) => ($gutterTop ? theme.space[$gutterTop] : 0)};
  margin-bottom: ${({ $gutterBottom, theme }) => ($gutterBottom ? theme.space[$gutterBottom] : 0)};
  font-weight: ${({ weight, theme }) => theme.fontWeight[weight ?? 'regular']};
  color: ${({ color, theme }) => theme.colors[(color ?? 'black') as keyof CustomTheme['colors']]};
  line-height: 1.5;
  ${({ weight }) =>
    weight !== 'regular'
      ? `
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        `
      : ''}
  ${(props) =>
    props.truncated &&
    `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `}
`
