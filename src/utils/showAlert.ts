import { Bounce, Id, ToastOptions, toast } from 'react-toastify'

type ShowAlertType = (message: React.ReactNode, options?: ToastOptions) => Id

const showAlert: ShowAlertType = (message, options) => {
  return toast(message, {
    position: 'top-left',
    autoClose: 6000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
    ...options,
  })
}

export default showAlert
