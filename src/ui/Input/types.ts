import { INPUT_TYPE } from './constants'

export interface InputProps {
  className?: string
  label?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  isDisabled?: boolean
  type?: (typeof INPUT_TYPE)[keyof typeof INPUT_TYPE]
  value?: string
  errorMessage?: string
  autocomplete?: React.HTMLInputAutoCompleteAttribute
  placeholder?: string
  width?: string
}

export type SInputProps = InputProps & { $hasIconRight: boolean; $hasError: boolean }
