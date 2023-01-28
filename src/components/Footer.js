import "./FooterStyle.css";

import React from 'react'
import { FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { AiFillGithub} from "react-icons/ai";

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
          <a href="https://www.upwork.com/freelancers/~01d54dbb420136beef">
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
          <a href="https://github.com/Aakasdeep02">
            <AiFillGithub size={20} style={{
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