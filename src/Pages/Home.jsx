import React from 'react'
import Carasoul from "../components/Slider";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Services from '../components/Services';
import Mission from '../components/Mission';

const Home = () => {
  return (
    <>
    <Slider/>
    <Services/>
    <Mission/>
    </>
  )
}

export default Home