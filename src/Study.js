
import React from "react";
import "./App.css"
import { Icon } from '@iconify/react';

const Study = () =>{
    return(
        <>

    <div className="study">
       
       <div className="stud">
        <h1>Study to become a global talent</h1>
        <p>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
        <button className="start">Start Now <Icon icon="ri:arrow-right-s-line" /></button>
       </div>

        <div className="studimg">
        <img src="https://edu.sqi.ng/wp-content/uploads/2023/06/bg-header-sqi-1.png" alt="" />
        </div>
    </div>

        
    </>
    )
}

export default Study