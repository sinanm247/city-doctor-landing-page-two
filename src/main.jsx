import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App.jsx'
import { BookingModalProvider } from './Context/BookingModalContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BookingModalProvider>
        <App />
      </BookingModalProvider>
    </BrowserRouter>
  </StrictMode>,
)