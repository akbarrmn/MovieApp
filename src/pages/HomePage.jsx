import React from 'react'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Header/Banner'
import List from '../components/ItemList/List'
import Navbar from '../components/Header/Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <List/>
      <Footer/>
    </>
  )
}

export default HomePage