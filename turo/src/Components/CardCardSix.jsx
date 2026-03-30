import React from 'react'
import '../Style/CardCarSix.css'
function CardCardSix() {
  return (
      <div className="cardtwosix">
      <h1>Car rentals in Oxford</h1>
      <div className="car">
        <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/APhpsDrRRgS7Zbv5If9mlw.291x194.png" />
          <h1>Land Rover Range Rover...</h1>
          <p>2023 5.0 <a href="#"><i class="fa-solid fa-star"></i></a>(61)</p>
          <h2>£380 for 3 days</h2>
        </div>

        <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/396z8dAUR7OeOtgiJrG72Q.291x194.jpg" />
          <h1>Mercedes-Benz CLA</h1>
          <p>2023 4.95 <a href="#"><i class="fa-solid fa-star"></i></a>(28)</p>
          <h2>£175 for 3 days</h2>
        </div>
        <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/heQ3dQiXQj6YArfnhOAkhw.291x194.jpg" />
          <h1>Mercedes-Benz B-Class</h1>
          <p>2016 5.0 <a href="#"><i class="fa-solid fa-star"></i></a>(2)</p>
          <h2>£118 for 3 days</h2>
        </div>
          <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/4NnDpubkTG-TiznN2OQT7A.291x194.jpg" />
          <h1>Land Rover Range Rover...</h1>
          <p>2010 5.0 <a href="#"><i class="fa-solid fa-star"></i></a>(9)</p>
          <h2>£170 for 3 days</h2>
        </div>

      </div>

    </div>
  )
}

export default CardCardSix