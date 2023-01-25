import "./FooterStyle.css";

import React from 'react'
import { FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="phone">
          <h4><FaPhone size={20} style={{
            color: "#fff",
            marginRight: "2rem"
          }} />
            +91 8949178728 </h4>
        </div>
        <div className="email">
          <h4><FaMailBulk size={20} style={{
            color: "#fff",
            marginRight: "2rem"
          }} />
            aakashdipmeghwal02@gmail.com </h4>
        </div>
        <div className="social">
          <NavLink to="url.com">
            <FaFacebook size={20} style={{
              color: "#fff",
              marginRight: "1rem"
            }} />
          </NavLink>
          <a href="url.com">
            <SiUpwork size={20} style={{
              color: "#fff",
              marginRight: "1rem"
            }} />
          </a>
          <a href="https://www.linkedin.com/in/aakasdeep-meghwal-2b799b202">
            <FaLinkedin size={20} style={{
              color: "#fff",
              marginRight: "1rem"
            }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer