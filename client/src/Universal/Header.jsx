import React, { useState } from "react";
import "./Header.css";
export default function Header() {
  const [display, setDisplay] = useState(
    window.innerWidth > 1024 ? true : false
  );
  // const [naveff, setnaveff] = useState(0);
  // useEffect(() => {
  //   setnaveff(window.pageYOffset);
  //   console.log(naveff);
  // }, [naveff]);

  return (
    <div className="nav-header">
      <div className="header-bar">
        <div className="header-img-container">
          <a to="/">
            <img
              src="https://i.ibb.co/LdpLm96/FINAL-LOGO-01.png"
              alt="Logo"
            />
          </a>
          {display ? (
            <p className="cross" onClick={() => setDisplay(!display)}>
              <img
                src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                alt="CrossMenu"
                width={"25px"}
              />
            </p>
          ) : (
            <div className="burger" onClick={() => setDisplay(!display)}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          )}
        </div>
        {display ? (
          <div className="nav-items">
            <div className="item1">
              <a href="#">Home</a>
              <a href="#aboutUs">About Us</a>
              <a href="#feature">Features</a>
              <a href="#games">Games</a>
              <a href="#">Packages</a>
              <a href="#contactUs">Contact Us</a>
              <a href="#">Plan Visit</a>
              <a className="bookNow" target='_blank' href="https://web.whatsapp.com/send?phone=9111144062&text=Hi%20!">Book Now</a>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
