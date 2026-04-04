import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/CarCardTwo.css";

function CarCardTwo() {
  const navigate = useNavigate();

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);
  const sliderRef4 = useRef(null);

  const scrollLeft = (ref) =>
    ref.current.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = (ref) =>
    ref.current.scrollBy({ left: 320, behavior: "smooth" });

  const cars = [
    {
      id: 1,
      name: "Land Rover Range Rover",
      year: 2018,
      rating: 5.0,
      reviews: 61,
      price: 420,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/qZN4oIFjQuKk0KSbDNnQnw.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500",
        "https://images.unsplash.com/photo-1563720228559-3e04fa78d9e9?w=500",
        "https://images.unsplash.com/photo-1601924582975-4f0b6a81d9e1?w=500",
        "https://images.unsplash.com/photo-1615874959475-c213823d5f82?w=500",
        "https://images.unsplash.com/photo-1605815027174-27d0b937f4ba?w=500",
      ],
    },
    {
      id: 2,
      name: "Mitsubishi Outlander",
      year: 2015,
      rating: 4.95,
      reviews: 28,
      price: 136,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/2Hrb0jfIQoa1BoNS_HiGgg.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1590825637961-0e864b1a2ecd?w=500",
        "https://images.unsplash.com/photo-1598300051141-360ebee7ead0?w=500",
        "https://images.unsplash.com/photo-1605383865368-e0a48abcbbd8?w=500",
        "https://images.unsplash.com/photo-1549924231-f129b911e442?w=500",
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500",
      ],
    },
    {
      id: 3,
      name: "BMW X3",
      year: 2018,
      rating: 5.0,
      reviews: 85,
      price: 193,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/OrlE3UDzSVqUsVjNtVSV1A.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1603386329338-c082d037b857?w=500",
        "https://images.unsplash.com/photo-1571607384338-88c1e3c49f26?w=500",
        "https://images.unsplash.com/photo-1618418036056-91da54e43732?w=500",
        "https://images.unsplash.com/photo-1552519507-5fc06a7f6b88?w=500",
        "https://images.unsplash.com/photo-1597009569348-8e0314783bf3?w=500",
      ],
    },
    {
      id: 4,
      name: "Kia Niro",
      year: 2020,
      rating: 5.0,
      reviews: 53,
      price: 151,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/kmgfqEtjQBuAel6qsCamWQ.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1596427095773-8215fa9d2600?w=500",
        "https://images.unsplash.com/photo-1595433707802-3e1b51e603f8?w=500",
        "https://images.unsplash.com/photo-1606813904415-3d6c27b04b6b?w=500",
        "https://images.unsplash.com/photo-1594976912481-7cbe9bee0a0a?w=500",
        "https://images.unsplash.com/photo-1579399508404-c6d5e048f5c8?w=500",
      ],
    },
    {
      id: 5,
      name: "Tesla Model 3",
      year: 2023,
      rating: 4.85,
      reviews: 43,
      price: 194,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/mpSMPFlnSfSW0Oe28hAiwA.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1593945195962-b2358a1bdb42?w=500",
        "https://images.unsplash.com/photo-1585238342023-957b7eef2a6d?w=500",
        "https://images.unsplash.com/photo-1598448513537-9b59b5d6bb8a?w=500",
        "https://images.unsplash.com/photo-1603784826142-d7fe1d523bc9?w=500",
        "https://images.unsplash.com/photo-1611675451298-c08bc2d05386?w=500",
      ],
    },
    {
      id: 6,
      name: "Suzuki S-Cross",
      year: 2023,
      rating: 5.0,
      reviews: 10,
      price: 155,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/5dkKuF4KT_Kopfwg5XBYlQ.291x194.heic",
      images: [
        "https://images.unsplash.com/photo-1581905764498-7b97c8b18333?w=500",
        "https://images.unsplash.com/photo-1582015023183-cf7a64d4dea4?w=500",
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
        "https://images.unsplash.com/photo-1552519507-7c72e47f3b3e?w=500",
        "https://images.unsplash.com/photo-1597009569348-8e0314783bf3?w=500",
      ],
    },
    {
      id: 7,
      name: "Mercedes-Benz CLA",
      year: 2021,
      rating: 5.0,
      reviews: 49,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/hXG1X3mnS5idoeU9VruE5A.291x194.heic",
      images: [
        "https://images.unsplash.com/photo-1597007791111-4d964c4c4a03?w=500",
        "https://images.unsplash.com/photo-1601933473947-026c3b3dfad8?w=500",
        "https://images.unsplash.com/photo-1597000260498-1f30e5edf9b0?w=500",
        "https://images.unsplash.com/photo-1597009026476-d4d84a35093c?w=500",
        "https://images.unsplash.com/photo-1589391886644-5b4e8c5b8a11?w=500",
      ],
    },
    {
      id: 8,
      name: "MINI Cooper",
      year: 2018,
      rating: 5.0,
      reviews: 5,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/YnbhUkjeTSSORRmXG5issQ.291x194.heic",
      images: [
        "https://images.unsplash.com/photo-1603476575605-d3197f7c6e8c?w=500",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500",
        "https://images.unsplash.com/photo-1587630484645-66a17d02f8b7?w=500",
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500",
        "https://images.unsplash.com/photo-1583267748632-b7632b3a0670?w=500",
      ],
    },
    {
      id: 9,
      name: "BMW 1 Series",
      year: 2017,
      rating: 4.88,
      reviews: 274,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/Jop4FP0vQnikY9Dn18uEdg.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1610020578133-c8544a04742b?w=500",
        "https://images.unsplash.com/photo-1583611373420-8c7818b5a2c9?w=500",
        "https://images.unsplash.com/photo-1571607384338-88c1e3c49f26?w=500",
        "https://images.unsplash.com/photo-1563720228559-3e04fa78d9e9?w=500",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500",
      ],
    },
    {
      id: 10,
      name: "Audi Q2",
      year: 2017,
      rating: 4.88,
      reviews: 274,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/QEggh2xnSLqCjNH01KvqaQ.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1601924582975-4f0b6a81d9e1?w=500",
        "https://images.unsplash.com/photo-1603386329338-c082d037b857?w=500",
        "https://images.unsplash.com/photo-1593945195962-b2358a1bdb42?w=500",
        "https://images.unsplash.com/photo-1597009569348-8e0314783bf3?w=500",
        "https://images.unsplash.com/photo-1552519507-5fc06a7f6b88?w=500",
      ],
    },
    {
      id: 11,
      name: "Land Rover Range Rover",
      year: 2018,
      rating: 5.0,
      reviews: 61,
      price: 420,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/qZN4oIFjQuKk0KSbDNnQnw.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500",
        "https://images.unsplash.com/photo-1563720228559-3e04fa78d9e9?w=500",
        "https://images.unsplash.com/photo-1601924582975-4f0b6a81d9e1?w=500",
        "https://images.unsplash.com/photo-1615874959475-c213823d5f82?w=500",
        "https://images.unsplash.com/photo-1605815027174-27d0b937f4ba?w=500",
      ],
    },
    {
      id: 12,
      name: "Mitsubishi Outlander",
      year: 2015,
      rating: 4.95,
      reviews: 28,
      price: 136,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/2Hrb0jfIQoa1BoNS_HiGgg.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1590825637961-0e864b1a2ecd?w=500",
        "https://images.unsplash.com/photo-1598300051141-360ebee7ead0?w=500",
        "https://images.unsplash.com/photo-1605383865368-e0a48abcbbd8?w=500",
        "https://images.unsplash.com/photo-1549924231-f129b911e442?w=500",
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500",
      ],
    },
    {
      id: 13,
      name: "BMW X3",
      year: 2018,
      rating: 5.0,
      reviews: 85,
      price: 193,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/OrlE3UDzSVqUsVjNtVSV1A.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1603386329338-c082d037b857?w=500",
        "https://images.unsplash.com/photo-1571607384338-88c1e3c49f26?w=500",
        "https://images.unsplash.com/photo-1618418036056-91da54e43732?w=500",
        "https://images.unsplash.com/photo-1552519507-5fc06a7f6b88?w=500",
        "https://images.unsplash.com/photo-1597009569348-8e0314783bf3?w=500",
      ],
    },
    {
      id: 14,
      name: "Kia Niro",
      year: 2020,
      rating: 5.0,
      reviews: 53,
      price: 151,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/kmgfqEtjQBuAel6qsCamWQ.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1596427095773-8215fa9d2600?w=500",
        "https://images.unsplash.com/photo-1595433707802-3e1b51e603f8?w=500",
        "https://images.unsplash.com/photo-1606813904415-3d6c27b04b6b?w=500",
        "https://images.unsplash.com/photo-1594976912481-7cbe9bee0a0a?w=500",
        "https://images.unsplash.com/photo-1579399508404-c6d5e048f5c8?w=500",
      ],
    },
    {
      id: 15,
      name: "Tesla Model 3",
      year: 2023,
      rating: 4.85,
      reviews: 43,
      price: 194,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/mpSMPFlnSfSW0Oe28hAiwA.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1593945195962-b2358a1bdb42?w=500",
        "https://images.unsplash.com/photo-1585238342023-957b7eef2a6d?w=500",
        "https://images.unsplash.com/photo-1598448513537-9b59b5d6bb8a?w=500",
        "https://images.unsplash.com/photo-1603784826142-d7fe1d523bc9?w=500",
        "https://images.unsplash.com/photo-1611675451298-c08bc2d05386?w=500",
      ],
    },
    {
      id: 16,
      name: "Suzuki S-Cross",
      year: 2023,
      rating: 5.0,
      reviews: 10,
      price: 155,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/5dkKuF4KT_Kopfwg5XBYlQ.291x194.heic",
      images: [
        "https://images.unsplash.com/photo-1581905764498-7b97c8b18333?w=500",
        "https://images.unsplash.com/photo-1582015023183-cf7a64d4dea4?w=500",
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
        "https://images.unsplash.com/photo-1552519507-7c72e47f3b3e?w=500",
        "https://images.unsplash.com/photo-1597009569348-8e0314783bf3?w=500",
      ],
    },
    {
      id: 17,
      name: "Mercedes-Benz CLA",
      year: 2021,
      rating: 5.0,
      reviews: 49,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/hXG1X3mnS5idoeU9VruE5A.291x194.heic",
      images: [
        "https://images.unsplash.com/photo-1597007791111-4d964c4c4a03?w=500",
        "https://images.unsplash.com/photo-1601933473947-026c3b3dfad8?w=500",
        "https://images.unsplash.com/photo-1597000260498-1f30e5edf9b0?w=500",
        "https://images.unsplash.com/photo-1597009026476-d4d84a35093c?w=500",
        "https://images.unsplash.com/photo-1589391886644-5b4e8c5b8a11?w=500",
      ],
    },
    {
      id: 18,
      name: "MINI Cooper",
      year: 2018,
      rating: 5.0,
      reviews: 5,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/YnbhUkjeTSSORRmXG5issQ.291x194.heic",
      images: [
        "https://images.unsplash.com/photo-1603476575605-d3197f7c6e8c?w=500",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500",
        "https://images.unsplash.com/photo-1587630484645-66a17d02f8b7?w=500",
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500",
        "https://images.unsplash.com/photo-1583267748632-b7632b3a0670?w=500",
      ],
    },
    {
      id: 19,
      name: "BMW 1 Series",
      year: 2017,
      rating: 4.88,
      reviews: 274,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/Jop4FP0vQnikY9Dn18uEdg.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1610020578133-c8544a04742b?w=500",
        "https://images.unsplash.com/photo-1583611373420-8c7818b5a2c9?w=500",
        "https://images.unsplash.com/photo-1571607384338-88c1e3c49f26?w=500",
        "https://images.unsplash.com/photo-1563720228559-3e04fa78d9e9?w=500",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500",
      ],
    },
    {
      id: 20,
      name: "Audi Q2",
      year: 2017,
      rating: 4.88,
      reviews: 274,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/QEggh2xnSLqCjNH01KvqaQ.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1601924582975-4f0b6a81d9e1?w=500",
        "https://images.unsplash.com/photo-1603386329338-c082d037b857?w=500",
        "https://images.unsplash.com/photo-1593945195962-b2358a1bdb42?w=500",
        "https://images.unsplash.com/photo-1597009569348-8e0314783bf3?w=500",
        "https://images.unsplash.com/photo-1552519507-5fc06a7f6b88?w=500",
      ],
    },
    {
      id: 21,
      name: "Land Rover Range Rover",
      year: 2018,
      rating: 5.0,
      reviews: 61,
      price: 420,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/qZN4oIFjQuKk0KSbDNnQnw.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500",
        "https://images.unsplash.com/photo-1563720228559-3e04fa78d9e9?w=500",
        "https://images.unsplash.com/photo-1601924582975-4f0b6a81d9e1?w=500",
        "https://images.unsplash.com/photo-1615874959475-c213823d5f82?w=500",
        "https://images.unsplash.com/photo-1605815027174-27d0b937f4ba?w=500",
      ],
    },
    {
      id: 22,
      name: "Mitsubishi Outlander",
      year: 2015,
      rating: 4.95,
      reviews: 28,
      price: 136,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/2Hrb0jfIQoa1BoNS_HiGgg.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1590825637961-0e864b1a2ecd?w=500",
        "https://images.unsplash.com/photo-1598300051141-360ebee7ead0?w=500",
        "https://images.unsplash.com/photo-1605383865368-e0a48abcbbd8?w=500",
        "https://images.unsplash.com/photo-1549924231-f129b911e442?w=500",
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500",
      ],
    },
    {
      id: 23,
      name: "BMW X3",
      year: 2018,
      rating: 5.0,
      reviews: 85,
      price: 193,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/OrlE3UDzSVqUsVjNtVSV1A.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1603386329338-c082d037b857?w=500",
        "https://images.unsplash.com/photo-1571607384338-88c1e3c49f26?w=500",
        "https://images.unsplash.com/photo-1618418036056-91da54e43732?w=500",
        "https://images.unsplash.com/photo-1552519507-5fc06a7f6b88?w=500",
        "https://images.unsplash.com/photo-1597009569348-8e0314783bf3?w=500",
      ],
    },
    {
      id: 24,
      name: "Kia Niro",
      year: 2020,
      rating: 5.0,
      reviews: 53,
      price: 151,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/kmgfqEtjQBuAel6qsCamWQ.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1596427095773-8215fa9d2600?w=500",
        "https://images.unsplash.com/photo-1595433707802-3e1b51e603f8?w=500",
        "https://images.unsplash.com/photo-1606813904415-3d6c27b04b6b?w=500",
        "https://images.unsplash.com/photo-1594976912481-7cbe9bee0a0a?w=500",
        "https://images.unsplash.com/photo-1579399508404-c6d5e048f5c8?w=500",
      ],
    },
    {
      id: 25,
      name: "Tesla Model 3",
      year: 2023,
      rating: 4.85,
      reviews: 43,
      price: 194,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/mpSMPFlnSfSW0Oe28hAiwA.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1593945195962-b2358a1bdb42?w=500",
        "https://images.unsplash.com/photo-1585238342023-957b7eef2a6d?w=500",
        "https://images.unsplash.com/photo-1598448513537-9b59b5d6bb8a?w=500",
        "https://images.unsplash.com/photo-1603784826142-d7fe1d523bc9?w=500",
        "https://images.unsplash.com/photo-1611675451298-c08bc2d05386?w=500",
      ],
    },
    {
      id: 26,
      name: "Suzuki S-Cross",
      year: 2023,
      rating: 5.0,
      reviews: 10,
      price: 155,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/5dkKuF4KT_Kopfwg5XBYlQ.291x194.heic",
      images: [
        "https://images.unsplash.com/photo-1581905764498-7b97c8b18333?w=500",
        "https://images.unsplash.com/photo-1582015023183-cf7a64d4dea4?w=500",
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
        "https://images.unsplash.com/photo-1552519507-7c72e47f3b3e?w=500",
        "https://images.unsplash.com/photo-1597009569348-8e0314783bf3?w=500",
      ],
    },
    {
      id: 27,
      name: "Mercedes-Benz CLA",
      year: 2021,
      rating: 5.0,
      reviews: 49,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/hXG1X3mnS5idoeU9VruE5A.291x194.heic",
      images: [
        "https://images.unsplash.com/photo-1597007791111-4d964c4c4a03?w=500",
        "https://images.unsplash.com/photo-1601933473947-026c3b3dfad8?w=500",
        "https://images.unsplash.com/photo-1597000260498-1f30e5edf9b0?w=500",
        "https://images.unsplash.com/photo-1597009026476-d4d84a35093c?w=500",
        "https://images.unsplash.com/photo-1589391886644-5b4e8c5b8a11?w=500",
      ],
    },
    {
      id: 28,
      name: "MINI Cooper",
      year: 2018,
      rating: 5.0,
      reviews: 5,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/YnbhUkjeTSSORRmXG5issQ.291x194.heic",
      images: [
        "https://images.unsplash.com/photo-1603476575605-d3197f7c6e8c?w=500",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500",
        "https://images.unsplash.com/photo-1587630484645-66a17d02f8b7?w=500",
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500",
        "https://images.unsplash.com/photo-1583267748632-b7632b3a0670?w=500",
      ],
    },
    {
      id: 29,
      name: "BMW 1 Series",
      year: 2017,
      rating: 4.88,
      reviews: 274,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/Jop4FP0vQnikY9Dn18uEdg.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1610020578133-c8544a04742b?w=500",
        "https://images.unsplash.com/photo-1583611373420-8c7818b5a2c9?w=500",
        "https://images.unsplash.com/photo-1571607384338-88c1e3c49f26?w=500",
        "https://images.unsplash.com/photo-1563720228559-3e04fa78d9e9?w=500",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500",
      ],
    },
    {
      id: 30,
      name: "Audi Q2",
      year: 2017,
      rating: 4.88,
      reviews: 274,
      price: 146,
      duration: "3 days",
      img: "https://images.turo.com/media/vehicle/images/QEggh2xnSLqCjNH01KvqaQ.291x194.jpg",
      images: [
        "https://images.unsplash.com/photo-1601924582975-4f0b6a81d9e1?w=500",
        "https://images.unsplash.com/photo-1603386329338-c082d037b857?w=500",
        "https://images.unsplash.com/photo-1593945195962-b2358a1bdb42?w=500",
        "https://images.unsplash.com/photo-1597009569348-8e0314783bf3?w=500",
        "https://images.unsplash.com/photo-1552519507-5fc06a7f6b88?w=500",
      ],
    },
  ];

  // Randomly shuffle cars
  const shuffledCars = cars;

  // Split into 4 sliders (bərabər yoxsa qalanlar son sliderdə)
  const chunkSize = Math.ceil(shuffledCars.length / 4);
  const slidersData = [];
  for (let i = 0; i < 4; i++) {
    slidersData.push(shuffledCars.slice(i * chunkSize, (i + 1) * chunkSize));
  }

  const sliders = [
    { data: slidersData[0], ref: sliderRef1 },
    { data: slidersData[1], ref: sliderRef2 },
    { data: slidersData[2], ref: sliderRef3 },
    { data: slidersData[3], ref: sliderRef4 },
  ];

  const handleCarClick = (car) => {
    navigate(`/car/${car.id}`, { state: { car } });
  };

  return (
    <div className="pages">
      {sliders.map((slider, i) => (
        <div className="cardtwo" key={i}>
          <div className="sidebtn">
            <h1>Affordable car rental in Newark</h1>
            <div className="buttons">
              <button onClick={() => scrollLeft(slider.ref)}>&lt;</button>
              <button onClick={() => scrollRight(slider.ref)}>&gt;</button>
            </div>
          </div>
          <div className="car" ref={slider.ref}>
            {slider.data.map((car) => (
              <div
                className="box"
                key={car.id}
                onClick={() => handleCarClick(car)}
                style={{ cursor: "pointer" }}
              >
                <img src={car.img} alt={car.name} />
                <h1>{car.name}</h1>
                <p>
                  {car.year} {car.rating} ★ ({car.reviews})
                </p>
                <h2>
                  £{car.price} for {car.duration}
                </h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarCardTwo;
