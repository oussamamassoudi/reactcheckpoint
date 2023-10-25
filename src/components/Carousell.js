import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



function Carousell() {
  return (
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/16776159/pexels-photo-16776159/free-photo-of-nature-plage-eau-rochers.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.pexels.com/photos/3214944/pexels-photo-3214944.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Carousell