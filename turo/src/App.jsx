import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Rented from './Components/Rented'
import RentedBTN from './Components/RentedBTN'
import CarCardTwo from './Components/CarCardTwo'
import NavHref from './Pages/NavHref'

import Footer from './Components/Footer'

function App() {
  return (
    <div className="container">
      <Navbar />
      <NavHref />
      <Rented />
      <RentedBTN />
      <CarCardTwo />
    </div>
  )
}

export default App