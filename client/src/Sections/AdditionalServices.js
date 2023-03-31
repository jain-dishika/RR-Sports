import React from 'react'
import "./AdditionalServices.css"
export default function AdditionalServices() {
  return (
    <div className="feature-name" id='feature'>
      <h1><span style={{ color: "#c02323" }}>A</span>menities</h1>
      <div className="service-section">
        <div className="service-container">
          <div className="single-service">
            <div className="service1 truck1">
              <div className="service2 truck2">
                {/* <i className="fa-sharp fa-solid fa-truck "></i> */}
                <i class="fa-solid fa-square-parking icon-feature"></i>
              </div>
            </div>
            <div className="icon-text">
              <h6>Ample Parking Space</h6>
              <p>For both 2 and 4 wheelers</p>
            </div>
          </div>
          <div className="single-service">
            <div className="service1 mortar1">
              <div className="service2 mortar2">
                <i class="fa-sharp fa-solid fa-mug-saucer icon-feature"></i>
              </div>
            </div>
            <div className="icon-text">
              <h6>Cafeteria</h6>
              <p>Free Drinking water</p>
            </div>
          </div>
          <div className="single-service">
            <div className="service1 ranking-star1">
              <div className="service2 ranking-star2">
                <i class="fa-sharp fa-solid fa-lock icon-feature"></i>
              </div>
            </div>
            <div className="icon-text">
              <h6>Lockers</h6>
              <p>Belongings will be safe</p>
            </div>
          </div>
          <div className="single-service">
            <div className="service1 headset1">
              <div className="service2 headset2">
                <i class="fa-solid fa-handshake icon-feature"></i>
              </div>
            </div>
            <div className="icon-text">
              <h6>Meeting Space</h6>
              <p>For get together, Conference etc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}