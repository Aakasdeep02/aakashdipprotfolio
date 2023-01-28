import "./WorkcardStyle.css"


import React from 'react'

const Workcard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="img" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-detail">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <a href={props.view} className="pro-btn">View</a>
                </div>
            </div>
        </div>
    )
}

export default Workcard