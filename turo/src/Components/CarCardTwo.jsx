import React, { useRef } from "react";
import "../Style/CarCardTwo.css";

function CarCardTwo() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  const cars = [
    {
      name: "Land Rover Range Rover",
      year: 2018,
      rating: 5.0,
      reviews: 61,
      price: 420,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/qZN4oIFjQuKk0KSbDNnQnw.291x194.jpg",
    },
    {
      name: "Mitsubishi Outlander",
      year: 2015,
      rating: 4.95,
      reviews: 28,
      price: 136,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/2Hrb0jfIQoa1BoNS_HiGgg.291x194.jpg",
    },
    {
      name: "Land Rover Range Rover",
      year: 2020,
      rating: 5.0,
      reviews: 10,
      price: 402,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/P6GKWuIHTUi2lDg17a95Vg.291x194.heic",
    },
    {
      name: "Suzuki S-Cross",
      year: 2023,
      rating: 5.0,
      reviews: 10,
      price: 155,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/5dkKuF4KT_Kopfwg5XBYlQ.291x194.heic",
    },
    {
      name: "Vauxhall Corsa",
      year: 2015,
      rating: 4.6,
      reviews: 20,
      price: 120,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/uTbD5mXETEmGrBAjb2WYzw.291x194.heic",
    },
    {
      name: "Vauxhall Insignia Grand",
      year: 2018,
      rating: 5.0,
      reviews: 28,
      price: 200,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/JHjMKvT1TpWsPYQN3DcPhw.291x194.heic",
    },
    {
      name: "Nissan Leaf",
      year: 2022,
      rating: 5.0,
      reviews: 10,
      price: 116,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/5ZZESiMUQ-adDCMahD0b5A.291x194.heic",
    },
    {
      name: "Kia Picanto",
      year: 2019,
      rating: 5.0,
      reviews: 10,
      price: 233,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/3hJTGxy1RuyDRQS_8tr8kQ.291x194.heic",
    },
  ];

  const carstwo = [
    {
      name: "BMW X3",
      year: 2018,
      rating: 5.0,
      reviews: 85,
      price: 193,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/OrlE3UDzSVqUsVjNtVSV1A.291x194.jpg",
    },
    {
      name: "Kia Niro",
      year: 2020,
      rating: 5.0,
      reviews: 53,
      price: 151,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/kmgfqEtjQBuAel6qsCamWQ.291x194.jpg",
    },
    {
      name: "Land Rover Range Rover",
      year: 2020,
      rating: 5.0,
      reviews: 10,
      price: 357,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/P6GKWuIHTUi2lDg17a95Vg.291x194.heic",
    },
    {
      name: "Suzuki S-Cross",
      year: 2023,
      rating: 5.0,
      reviews: 10,
      price: 155,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/5dkKuF4KT_Kopfwg5XBYlQ.291x194.heic",
    },
    {
      name: "Mercedes-Benz CLA",
      year: 2021,
      rating: 5.0,
      reviews: 49,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/hXG1X3mnS5idoeU9VruE5A.291x194.heic",
    },
    {
      name: "MINI Cooper",
      year: 2018,
      rating: 5.0,
      reviews: 5,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/YnbhUkjeTSSORRmXG5issQ.291x194.heic",
    },
        {
      name: "BMW 1 Series",
      year: 2017,
      rating: 4.88,
      reviews: 274,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/Jop4FP0vQnikY9Dn18uEdg.291x194.jpg",
    },
  ];

  return (
    <div className="pages">
      {/* ==== 1-ci Slider ==== */}
      <div className="cardtwo">
        <div className="sidebtn">
          <h1>SUV rental at Manchester (MAN) airport</h1>

          <div className="buttons">
            <button onClick={() => scrollLeft(scrollRef1)}>
              <i className="fa-solid fa-angle-left"></i>
            </button>

            <button onClick={() => scrollRight(scrollRef1)}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>

        <div className="car" ref={scrollRef1}>
          {cars.map((car, index) => (
            <div className="box" key={index}>
              <img src={car.img} alt={car.name} />
              <h1>{car.name}</h1>
              <p>
                {car.year} {car.rating} <i className="fa-solid fa-star"></i> (
                {car.reviews})
              </p>
              <h2>
                £{car.price} for {car.duration}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* ==== 2-ci Slider ==== */}
      <div className="cardtwo">
        <div className="sidebtn">
          <h1>SUV rental at Manchester (MAN) airport</h1>

          <div className="buttons">
            {/* Buradaki butonlar artık scrollRef2 kullanıyor */}
            <button onClick={() => scrollLeft(scrollRef2)}>
              <i className="fa-solid fa-angle-left"></i>
            </button>

            <button onClick={() => scrollRight(scrollRef2)}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>

        <div className="car" ref={scrollRef2}>
          {carstwo.map((car, index) => (
            <div className="box" key={index}>
              <img src={car.img} alt={car.name} />
              <h1>{car.name}</h1>
              <p>
                {car.year} {car.rating} <i className="fa-solid fa-star"></i> (
                {car.reviews})
              </p>
              <h2>
                £{car.price} for {car.duration}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarCardTwo;
