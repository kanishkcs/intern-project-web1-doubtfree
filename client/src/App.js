import React from 'react'
import Navbar from './components/Navbar'
import Idea from './Pages/Idea'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Grid from './components/Grid'
import Error from './Pages/Error'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/idea" element={<Idea />} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer /> 
    </Router>
    
  )
}

export default App