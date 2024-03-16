import { SForm } from './styled'

interface FormProps {
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void
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
