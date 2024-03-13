import styled from 'styled-components'

import Divider from '@ui/Divider'
import Link from '@ui/Link'

export const CloudLoginButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  width: 100%;
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
  margin-top: ${({ theme }) => theme.space[2.5]};
  margin-bottom: ${({ theme }) => theme.space[4]};
  margin-left: auto;
`
