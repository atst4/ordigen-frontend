import { useState } from 'react'

import Header from './components/Header'
import Banner from './components/Banner'
import Brands from './components/Brands'
import Connect from './components/Connect'
import HowItWork from './components/HowItWork'
import Services from './components/Services'
import RoadMap from './components/RoadMap'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Brands />
      <Connect />
      <HowItWork />
      <Services />
      <RoadMap />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
