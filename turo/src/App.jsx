import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Rented from './Components/Rented'
import RentedBTN from './Components/RentedBTN'
import CarCardTwo from './Components/CarCardTwo'
import CarCardThere from './Components/CarCardThere'

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Rented/>
      <RentedBTN/>
      <CarCardTwo/>
      <CarCardThere/>
    </div>
  )
}

export default App