import React from 'react'
import '../Style/CarCardThere.css'


function CarCardThere() {
  return (
    <div className="cardtwothere">
      <h1>Car rentals at Manchester (MAN) airport</h1>
      <div className="car">
        <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/uTbD5mXETEmGrBAjb2WYzw.291x194.heic" />
          <h1>Vauxhall Corsa</h1>
          <p>2025 5.0 <a href="#"><i class="fa-solid fa-star"></i></a>(2)</p>
          <h2>£124 for 3 days</h2>
        </div>

        <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/JHjMKvT1TpWsPYQN3DcPhw.291x194.heic" />
          <h1>Vauxhall Insignia Grand...</h1>
          <p>2018 5.0 <a href="#"><i class="fa-solid fa-star"></i></a>(14)</p>
          <h2>£120 for 3 days</h2>
        </div>
        <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/5ZZESiMUQ-adDCMahD0b5A.291x194.heic" />
          <h1>Nissan Leaf</h1>
          <p>2022 5.0 <a href="#"><i class="fa-solid fa-star"></i></a>(2)</p>
          <h2>£115 for 3 days</h2>
        </div>
          <div className="box">
          <img src="https://images.turo.com/media/vehicle/images/3hJTGxy1RuyDRQS_8tr8kQ.291x194.heic" />
          <h1>Kia Picanto</h1>
          <p>2019 5.0 <a href="#"><i class="fa-solid fa-star"></i></a>(4)</p>
          <h2>£124 for 3 days</h2>
        </div>

      </div>

    </div>  
    )
}

export default CarCardThere