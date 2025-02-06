import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/NavBar.jsx'
import { BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CartProvider> {/* Wrap the entire app */}
        <Navbar/>
        <App />
      </CartProvider>
    </Router>
  </StrictMode>,
)
