import React from 'react'
import ReactDOM from 'react-dom/client'
import { Calculadora } from './features/Calculadora'
import './global/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>
)
