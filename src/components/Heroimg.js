import "./HeroimgStyle.css";
import React from 'react'
import { Link } from "react-router-dom";
import Introimg from "../assets/heroimg.png";
import Resumefile from "../assets/Aakasdeep.pdf";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="intro-img" src={Introimg} 
          alt="Introimg" />  
        </div>
        <div className="content">
          <p>HI, I'M A FREELANCER.</p>
          <h1>Programmer And Developer.</h1>
          <Link to="/project" className="btn">Project</Link>
          <Link to={Resumefile} download="Aakasdeep-PDF-document" target="-blank" rel="noreferrer" className="btn">Resume</Link>
        </div>
    </div>
  )
}

export default Heroimg;