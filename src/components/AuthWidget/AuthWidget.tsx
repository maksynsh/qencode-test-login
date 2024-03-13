import styled from 'styled-components'

const AuthWidget = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  margin: ${({ theme }) => theme.space[3]} 0;
`

export default AuthWidget
