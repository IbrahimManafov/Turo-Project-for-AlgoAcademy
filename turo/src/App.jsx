import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Rented from './Components/Rented'
import RentedBTN from './Components/RentedBTN'
import CarCard from './Components/CarCard'
import CarCardTwo from './Components/CarCardTwo'

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Rented/>
      <RentedBTN/>
      <CarCard/>
      <CarCardTwo/>
    </div>
  )
}

export default App