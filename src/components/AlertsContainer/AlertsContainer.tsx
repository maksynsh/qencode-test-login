import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const AlertsContainer = () => (
  <ToastContainer
    position="top-left"
    autoClose={5000}
    limit={3}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Bounce}
  />
)

export default AlertsContainer
