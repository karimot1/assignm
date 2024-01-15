import React from "react";
import './App.css';
import { Icon } from '@iconify/react';


const Tour = ()=>{
    return(
        <>

        <div className="tour">

            <div className="video">
            <iframe width="396" height="223" src="https://www.youtube.com/embed/HgC6bjMbqpw" title="Campus Tour | SQI College of ICT, Ibadan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="tourtext">
                <h1>Take a Tour</h1>
                <p>Our campus is a living centre for innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an atmosphere that is open-minded, always exciting, and filled with academic excellence.</p>
                <button>Apply Now <Icon icon="ep:arrow-right-bold" /></button>
            </div>

        </div>

        </>
    )
}

export default Tour