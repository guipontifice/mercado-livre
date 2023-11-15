import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingMarkup from './components/LoadingMarkup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={LoadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>,
  </Suspense>
)
