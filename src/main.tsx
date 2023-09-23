import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles.scss'
import { BrowserRouter } from 'react-router-dom'
import { LotContextProvider } from './contexts/LotContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <LotContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </LotContextProvider>
)
