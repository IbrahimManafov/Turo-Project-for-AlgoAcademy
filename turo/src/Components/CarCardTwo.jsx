import React from 'react'
import '../Style/CarCardTwo.css'

function CarCardTwo() {
  return (
    <div className="cardtwo">
      <h1>SUV rental at Manchester (MAN) airport</h1>
      <div className="car">
        <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/qZN4oIFjQuKk0KSbDNnQnw.291x194.jpg" />
          <h1>Land Rover Range Rover...</h1>
          <p>2018 5.0 <a href="#"><i class="fa-solid fa-star"></i></a>(61)</p>
          <h2>£420 for 3 days</h2>
        </div>

        <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/2Hrb0jfIQoa1BoNS_HiGgg.291x194.jpg" />
          <h1>Mitsubishi Outlander...</h1>
          <p>2015 4.95 <a href="#"><i class="fa-solid fa-star"></i></a>(28)</p>
          <h2>£136 for 3 days</h2>
        </div>
        <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/P6GKWuIHTUi2lDg17a95Vg.291x194.heic" />
          <h1>Land Rover Range Rover...</h1>
          <p>2020 5.0 <a href="#"><i class="fa-solid fa-star"></i></a>(10)</p>
          <h2>£402 for 3 days</h2>
        </div>
          <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/5dkKuF4KT_Kopfwg5XBYlQ.291x194.heic" />
          <h1>Suzuki S-Cross</h1>
          <p>2023 5.0 <a href="#"><i class="fa-solid fa-star"></i></a>(10)</p>
          <h2>£155 for 3 days</h2>
        </div>

      </div>

    </div>
  )
}

export default CarCardTwo