import styled from 'styled-components'

import { CustomTheme } from '@config/theme'
import { ButtonProps } from './types'

const getVariantStyles = (theme: CustomTheme, variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary': {
      return `
        border-color: ${theme.colors.primary};
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};

        &:hover {
          border-color: ${theme.colors.blue};
          background-color: ${theme.colors.blue};
        }

        &:active {
          border-color: ${theme.colors.blue};
          background-color: ${theme.colors.blue};
        }

        &:focus:not(:active) {
          box-shadow:
            0px 0px 0px 2px ${theme.colors.white},
            0px 0px 0px 4px ${theme.colors.lightBlue};
        }

        &:disabled {
          border-color: ${theme.colors.lightBlue};
          background-color: ${theme.colors.lightBlue};
        }
      `
    }
    case 'secondary': {
      return `
        background-color: ${theme.colors.white};
        color: ${theme.colors.grey};
        box-shadow: 0px 1px 2px rgb(0 0 0 / 8%);
        border-color: ${theme.colors.lightGrey};

        &:hover {
          background-color: ${theme.colors.light};
        }

        &:active {
          background-color: ${theme.colors.lightGrey};
          color: ${theme.colors.black};
          border-color: transparent;
          box-shadow: none;
        }

        &:focus:not(:active) {
          box-shadow:
            0px 1px 2px rgb(0 0 0 / 8%),
            0px 0px 0px 2px ${theme.colors.white},
            0px 0px 0px 4px ${theme.colors.lightBlue};
        }

        &:disabled {
          color: ${theme.colors.lightGrey};
          box-shadow: none;
        }
      `
    }
  }
}

export const SButton = styled.button<ButtonProps>`
  position: relative;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.space[1]};
  padding: 0 ${({ theme }) => theme.space[2]};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme, fontSize }) => theme.fontSizes[fontSize ?? 'md']};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[1]};
  height: ${({ theme }) => theme.rowSize.md};
  width: ${({ width }) => width ?? 'auto'};

  svg {
    width: 18px;
    height: 18px;
  }

  &:focus {
    outline: none;
  }

  ${({ theme, variant }) => getVariantStyles(theme, variant)};

  ${({ theme, size, fontSize }) =>
    size === 'small'
      ? `
        padding: 0 ${theme.space[1.5]};
        font-size: ${theme.fontSizes[fontSize ?? 'sm']};
        height: ${theme.rowSize.sm};
      `
      : ``}

  ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed;
      pointer-events: none;
    `}
`
