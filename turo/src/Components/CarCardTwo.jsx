import React from 'react'
import '../Style/CarCardTwo.css'

function CarCardTwo() {
  const cars = [
    {
      name: "Land Rover Range Rover",
      year: 2018,
      rating: 5.0,
      reviews: 61,
      price: 420,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/qZN4oIFjQuKk0KSbDNnQnw.291x194.jpg"
    },
    {
      name: "Mitsubishi Outlander",
      year: 2015,
      rating: 4.95,
      reviews: 28,
      price: 136,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/2Hrb0jfIQoa1BoNS_HiGgg.291x194.jpg"
    },
    {
      name: "Land Rover Range Rover",
      year: 2020,
      rating: 5.0,
      reviews: 10,
      price: 402,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/P6GKWuIHTUi2lDg17a95Vg.291x194.heic"
    },
    {
      name: "Suzuki S-Cross",
      year: 2023,
      rating: 5.0,
      reviews: 10,
      price: 155,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/5dkKuF4KT_Kopfwg5XBYlQ.291x194.heic"
    }

  ];
  const carstwo = [
    {
      name: "Vauxhall Corsa",
      year: 2015,
      rating: 4.60,
      reviews: 20,
      price: 120,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/uTbD5mXETEmGrBAjb2WYzw.291x194.heic"
    },
    {
      name: "Vauxhall Insignia Grand",
      year: 2018,
      rating: 5.0,
      reviews: 28,
      price: 200,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/JHjMKvT1TpWsPYQN3DcPhw.291x194.heic"
    },
    {
      name: "Nissan Leaf",
      year: 2022,
      rating: 5.0,
      reviews: 10,
      price: 116,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/5ZZESiMUQ-adDCMahD0b5A.291x194.heic"
    },
    {
      name: "Kia Picanto",
      year: 2019,
      rating: 5.0,
      reviews: 10,
      price: 233,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/3hJTGxy1RuyDRQS_8tr8kQ.291x194.heic"
    }

  ];
  return (
    <div className="pages">
      
      <div className="cardtwo">
                <h1>SUV rental at Manchester (MAN) airport</h1>

        <div className="car">
          {cars.map((car, index) => (
            <div className="box" key={index}>
              <img src={car.img} alt={car.name} />
              <h1>{car.name}</h1>
              <p>
                {car.year} {car.rating}{" "}
                <a href="#">
                  <i className="fa-solid fa-star"></i>
                </a>
                ({car.reviews})
              </p>
              <h2>£{car.price} for {car.duration}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="cardtwo">
        <h1>SUV rental at Manchester (MAN) airport</h1>

        <div className="car">
          {carstwo.map((car, index) => (
            <div className="box" key={index}>
              <img src={car.img} alt={car.name} />
              <h1>{car.name}</h1>
              <p>
                {car.year} {car.rating}{" "}
                <a href="#">
                  <i className="fa-solid fa-star"></i>
                </a>
                ({car.reviews})
              </p>
              <h2>£{car.price} for {car.duration}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarCardTwo