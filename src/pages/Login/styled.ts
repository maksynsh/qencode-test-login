import styled from 'styled-components'

import Divider from '@ui/Divider'
import Link from '@ui/Link'

export const LoginWidget = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  margin: ${({ theme }) => theme.space[3]} 0;
`

export const CloudLoginButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  width: 100%;

  button {
    width: 100%;
  }
`

export const SDivider = styled(Divider)`
  margin: ${({ theme }) => theme.space[5]};
`

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[3]};
  width: 100%;
`

export const SLink = styled(Link)`
  margin-top: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  margin-left: auto;
`
