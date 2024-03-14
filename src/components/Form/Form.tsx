import { SForm } from './styled'

interface FormProps {
  onSubmit: (e?: React.BaseSyntheticEvent<object> | undefined) => void
  children?: React.ReactNode
}

const Form = ({ onSubmit, children }: FormProps) => (
  <SForm
    onSubmit={(e) => {
      e.preventDefault()
      void onSubmit(e)
    }}
  >
    {children}
  </SForm>
)

export default Form
