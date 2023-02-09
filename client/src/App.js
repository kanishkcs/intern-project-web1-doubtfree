import React from 'react'
import Navbar from './components/Navbar'
import Idea from './Pages/Idea'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Grid from './components/Grid'
import Error from './Pages/Error'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/idea" element={<Idea />} />
        <Route path="*" element={<Error/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer /> 
    </Router>
    
  )
}

export default App