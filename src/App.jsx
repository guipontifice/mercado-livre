import React from 'react'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
function App() {
    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )
}

export default App