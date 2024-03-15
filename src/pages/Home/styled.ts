import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  padding: ${({ theme }) => theme.space[1.5]} ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
  border-radius: 0px 0px ${({ theme }) => theme.space[1.5]} ${({ theme }) => theme.space[1.5]};
`
