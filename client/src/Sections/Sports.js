import React, {useState } from 'react'
// import { NavLink } from 'react-router-dom'
import "./Sports.css";
function Sports(props) {
  return (
    <div className="singleProduct-origin" >
      <div className="product-card">
        <div className="figure">
          <img src={props.img} alt=""/>
        </div>
        <div className="card-data">
          <div className="card-data-flex">
              <p className='card-data--name'>{props.name}</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Sports
