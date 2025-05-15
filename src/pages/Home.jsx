import React, { useEffect } from 'react'
import Header from '../components/Header'
import Speciality from '../components/Speciality'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      {/* Homepage */}
      <Header />
      <Speciality />
      <TopDoctors />
      <Banner />
      {/* <Footer/> */}
    </div>
  )
}

export default Home
