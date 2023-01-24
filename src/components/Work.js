import "./WorkcardStyle.css"
import Workcard from "./Workcard"
import WorkCardData from "./WorkCardData"

import React from 'react'

const Work = () => {
    return (
        <div className="workcontainer">
            <h1 className="project-heading">Project</h1>
            <div className="project-container">
                {WorkCardData.map((val, ind) => {
                    return (
                        <Workcard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}

                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work;