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
import CompanyFormation from './Pages/CompanyFormation'
import Technical from './Pages/Technical'
import Mentor from './Pages/Mentor'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/idea" element={<Idea />} />
        <Route path="/company" element={<CompanyFormation />} />
        <Route path="/mentoring" element={<Mentor />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="*" element={<Error/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer /> 
    </Router>
    
  )
}

export default App