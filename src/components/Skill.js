import "./SkillStyle.css"

import React from 'react'

const Skill = () => {
  return (
    <div className="skill-section">
        <div className="header1 skill-head">
            <h1>My Skills</h1>
            <p>Here is My skills to represent my Expertise.</p>
        </div>
        <div className="skill-main">
            <div className="skill-bar">
                <div className="info">
                    <p>HTML</p>
                    <p className="percent">60%</p>
                </div>
                <div className="bar">
                    <span className="html"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p>CSS</p>
                    <p className="percent">50%</p>
                </div>
                <div className="bar">
                    <span className="css"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p>JAVASCRIPT</p>
                    <p className="percent">40%</p>
                </div>
                <div className="bar">
                    <span className="javascript"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p>BOOTSTRAP</p>
                    <p className="percent">60%</p>
                </div>
                <div className="bar">
                    <span className="bootstrap"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p>NODE.JS</p>
                    <p className="percent">30%</p>
                </div>
                <div className="bar">
                    <span className="node"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p>REACTJS</p>
                    <p className="percent">40%</p>
                </div>
                <div className="bar">
                    <span className="react"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p>JAVA</p>
                    <p className="percent">70%</p>
                </div>
                <div className="bar">
                    <span className="java"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p>PYTHON</p>
                    <p className="percent">50%</p>
                </div>
                <div className="bar">
                    <span className="python"></span>
                </div>
            </div>
            <div className="skill-bar">
                <div className="info">
                    <p>C++</p>
                    <p className="percent">50%</p>
                </div>
                <div className="bar">
                    <span className="c"></span>
                </div>
            </div>    
        </div>
        <div className="greeting">
            <p><span>THANK YOU</span> For Visiting My About-Me Page. </p>
        </div>
    </div>
  )
}

export default Skill