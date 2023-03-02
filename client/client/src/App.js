import React from 'react'
import Navbar from './components/Navbar'
import Idea from './Pages/Idea'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Grid from './components/Grid'
import Error from './Pages/Error'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Technical from './Pages/Technical'
import Funding from './Pages/Funding'
import Mentoring from './Pages/Mentoring'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/idea" element={<Idea />} />
        <Route path="*" element={<Error/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/technical" element={<Technical/>} />
        {/* <Route path="/mentoring" element={<Mentoring/>} /> */}
        <Route path="/funding" element={<Funding/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer /> 
    </Router>
    
  )
}

export default App