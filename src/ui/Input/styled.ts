import styled, { css } from 'styled-components'
import { SInputProps } from './types'

export const Container = styled.div<{ width?: string }>`
  width: ${({ width }) => width ?? '100%'};
`

export const SLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 3;
  margin-bottom: ${({ theme }) => theme.space[1]};
`

export const SFieldWrapper = styled.div`
  position: relative;
`

export const SInput = styled.input<SInputProps>`
  display: block;
  width: 100%;
  height: ${({ theme }) => theme.rowSize.md};
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 4px;
  padding: ${({ theme }) => theme.space[1.5]};
  padding-right: ${({ $hasIconRight }) => ($hasIconRight ? '36px' : ({ theme }) => theme.space[1])};
  color: ${({ theme }) => theme.colors.grey};
  transition: all ${({ theme }) => theme.transitions.default};
  transition-property: border-color, outline, box-shadow;
  line-height: 1;
  min-width: 100%;
  max-width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: 0;
    box-shadow: 0 0 0 4px rgb(17 131 236 / 20%);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.light};
    outline: none;
  }

  ${({ $hasError }) =>
    $hasError
      ? css`
          border-color: ${({ theme }) => theme.colors.red};

          &:focus {
            border-color: ${({ theme }) => theme.colors.red};
            box-shadow: 0 0 0 4px rgb(204 0 51 / 20%);
          }
        `
      : ''}
`

export const SError = styled.div`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: ${({ theme }) => theme.space[0.5]};
  color: ${({ theme }) => theme.colors.red};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`

export const SIconWrapper = styled.div<{ $hasError: boolean }>`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.lightGrey};

  svg {
    width: 20px;
    height: 20px;
  }

  right: 0;
  margin-right: ${({ theme }) => theme.space[1.5]};

  ${({ $hasError }) =>
    $hasError &&
    css`
      svg {
        color: ${({ theme }) => theme.colors.red};
      }
    `}
`
