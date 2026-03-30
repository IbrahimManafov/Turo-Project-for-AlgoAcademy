import React from 'react'
import '../Style/Rented.css'

function Rented() {
  return (
    <div className="Rent">
      
      <img 
        src="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1170&auto=format&fit=crop"
        alt=""
      />

      <div className="overlay">
        
        <div className="RentTy">
          <h1>Rental reinvented</h1>
          <p>
            Rent the exact car you want, exactly where you need it,
            for days, weeks, or months
          </p>
        </div>

        <div className="search-bar">
          
          <div className="search-item">
            <label>Where</label>
            <input type="text" placeholder="City, airport, address or hotel" />
          </div>

          <div className="search-item">
            <label>From</label>
            <div className="inline">
              <input type="text" placeholder="Add dates" />
              <input type="text" placeholder="Add time" />
            </div>
          </div>

          <div className="search-item">
            <label>Until</label>
            <div className="inline">
              <input type="text" placeholder="Add dates" />
              <input type="text" placeholder="Add time" />
            </div>
          </div>
           <a href="#" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>

        </div>

      </div>
    </div>
  )
}
export default Rented