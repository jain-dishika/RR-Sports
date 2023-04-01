import React from "react";
// import { NavLink } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-starting" id="contactUs">
      <div className="footer-section">
        <div className="footer-container">
          <div className="footer-image footer-solo-section">
            <img src="https://i.ibb.co/LdpLm96/FINAL-LOGO-01.png" alt="" />
          </div>
          <div className="footer-content-section footer-solo-section">
            <div className="content-section-heading">
              <h6 style={{ color: "black", fontWeight: "600" }}>Quick Links</h6>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#games">Games</a>
                </li>
                <li>
                  <a href="#feture">Features</a>
                </li>
                <li>
                  <a href="#">Packages</a>
                </li>
                <li>
                  <a href="#contactUs">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-help-section footer-solo-section">
            <h6 style={{ color: "black", fontWeight: "600" }}>Category</h6>
            <ul>
              <li>Cricket turf</li>
              <li>Badminton court</li>
              <li>Table tennis</li>
              <li>Pool table</li>
              <li>Air hockey</li>
            </ul>
          </div>
          <div className="footer-contact-section footer-solo-section">
            <h6 style={{ color: "black", fontWeight: "600" }}>
              Have Questions?
            </h6>
            <div
              className="footer-address solo-contact"
              style={{ fontWeight: "600" }}
            >
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "black" }}
              ></i>{" "}
              Pearl Leaf, Super Corridor, Near Symboisis College, Indore
            </div>
            <div
              className="footer-contact-no solo-contact"
              style={{ fontWeight: "600" }}
            >
              <i className="fa-solid fa-phone" style={{ color: "black" }}></i>
              +91 9111144062
            </div>
            <div
              className="footer-gmail solo-contact"
              style={{ fontWeight: "600" }}
            >
              <i
                className="fa-solid fa-envelope"
                style={{ color: "black" }}
              ></i>{" "}
              
            </div>
          </div>
        </div>
      </div>
      <div className="contact-details">
        <h1>Get in touch with us</h1>
        <div className="social-icons">
          <div className="whatsApp social-icon">
          <a target='_blank' href="https://web.whatsapp.com/send?phone=9111144062&text=Hi%20!"><i class="fa-brands fa-whatsapp social-media"></i></a>
          </div>
          <div className="insta social-icon">
            <a href="https://instagram.com/rrsportsandamenities?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram social-media"></i></a>
          </div>
          <div className="faceBook social-icon">
            <a href="https://www.facebook.com/profile.php?id=100090298370318" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook social-media"></i></a>
          </div>
          <div className="youTube social-icon">
            <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube social-media"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
