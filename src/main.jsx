import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import TanstackQueryProvider from './hooks/providers/TanstackQueryProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <TanstackQueryProvider>
      <RouterProvider router={router} />
  </TanstackQueryProvider>
  </StrictMode>,
)
