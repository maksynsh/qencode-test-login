import styled from 'styled-components'

export const SDivider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;

  &:before,
  &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  }
`

export const SDividerText = styled.span`
  padding: 0 ${({ theme }) => theme.space[0.5]};
`
