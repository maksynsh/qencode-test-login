import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: ${({ theme }) => theme.space[1.5]} ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.light};
  width: 100%;
`
