import React from "react";
import "./App.css"
import { Icon } from '@iconify/react';

const App =() =>{

  const mystyle = {
    button:{
      backgroundColor:"transparent",
      border:"0"
    }
  }




  return(
    <>
    <div style={{width:'100%',height:'80px',backgroundColor:'white', boxShadow:'0 0 5px', position:'fixed'}}>
   

    <div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}>

    <div style={{width:'8%', height:'75px',}}>
      <img src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg" alt="" style={{width:'100%',height:'75px'}} />
    </div>

      <div className="navbarbutts">

      <button style={mystyle.button}> About us <Icon icon="ri:arrow-down-s-line" /></button>
      <button style={mystyle.button}>Pragramm us <Icon icon="ri:arrow-down-s-line" /></button>
      <button style={mystyle.button}>Admissions <Icon icon="ri:arrow-down-s-line" /></button>
      <button style={mystyle.button}>E-portal <Icon icon="ri:arrow-down-s-line" /></button>
      <button style={mystyle.button}>SQI Scholarship </button>
      <button style={mystyle.button}>News</button>
      

     
    </div>

    
    <div className="navbaricon">
        
        <button><Icon icon="el:lines" /></button>
        
      
      </div>


    </div>

    
</div>

    <div className="icon">
      <button className="facebook"><Icon icon="devicon:facebook" /></button>
      <button className="twitter"><Icon icon="skill-icons:twitter" /></button>
      <button className="linked"><Icon icon="devicon:linkedin" /></button>
    </div>

    <div className="whatsapp">
    <Icon className="icons" icon="logos:whatsapp-icon" width="70" height="100" />
    <button>Need Help? <b>Chat with us</b></button>
    </div>
    </>
  )



}



export default App