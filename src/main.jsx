import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Components/Routes/Routes'
// import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast'




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={Routes} />
  <Toaster/>
  </StrictMode>,
)
