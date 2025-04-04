import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'

import Searchbar from '../components/Searchbar'
import Features from '../components/Features'

const Home = () => {
  return (
    <div>
       <Searchbar/>
       <Features/>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner /> 
    </div>
  )
}

export default Home