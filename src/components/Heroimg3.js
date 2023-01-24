import "./Heroimg3Style.css";
import Heroimg1 from "../assets/heroimg3.png";

import React from 'react'

const Heroimg3 = () => {
    return (
        <div className="hero-img1">
            <img className="about-img1" src={Heroimg1}
                alt="hero-img3"></img>

            <div className="content">
                <h1>About Me</h1>
                <p>I'M Aakasdeep Meghwal.</p>
            </div>
        </div>
    )
}

export default Heroimg3