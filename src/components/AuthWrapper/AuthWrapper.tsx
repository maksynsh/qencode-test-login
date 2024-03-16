import styled from 'styled-components'

const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  margin: ${({ theme }) => theme.space[3]} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: 0 ${({ theme }) => theme.space[1.5]};
  }
`

export default AuthWrapper
