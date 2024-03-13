import { SDivider, SDividerText } from './styled'

interface DividerProps {
  className?: string
  label?: string
}

const Divider = ({ className, label }: DividerProps) => {
  return (
    <SDivider className={className}>
      {label && <SDividerText>{label.toUpperCase()}</SDividerText>}
    </SDivider>
  )
}

export default Divider
