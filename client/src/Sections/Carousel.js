import React from 'react'
import "./Carousel.css"
function Carousel() {
  return (

    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2600">
            <img src="https://www.familyleisuremedia.com/images/companies/1/pool-table-banner.jpg?1559304661328" className="d-block w-100 rounded" alt="..." />
          </div>
          <div className="carousel-item " data-bs-interval="3000">
            <img src="https://t3.ftcdn.net/jpg/02/70/73/76/360_F_270737680_1IhImr4BAYaTn8DxHbf8kAFVAxuN1Fcs.jpg" className="d-block w-100 rounded" alt="..." />
          </div>
          <div className="carousel-item " data-bs-interval="3600">
            <img src="https://i.pinimg.com/originals/c5/0b/05/c50b05ddc99ce47ed35af8a12f9c0ff1.jpg" className="d-block w-100 rounded" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">last</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
