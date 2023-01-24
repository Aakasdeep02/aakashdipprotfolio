import "./Heroimg2Style.css";
import Heroimg from "../assets/heroimg1.png"


import React  from 'react'

const Heroimg2 = () =>  {
        return (
            <div className="hero-img">
                <img className="projectimg" src={Heroimg}
                alt="heroimg1" />
                <div className="content">
                    <h1>Projects</h1>
                    <p>Here are My some projects.</p>
                </div>
            </div>
        );
}

export default Heroimg2