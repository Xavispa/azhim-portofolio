import React from "react"; 
import "./Hero.css";
import HeroImg from "../assets/Hero-bg.png"

function Hero(){
    return(
        <div className="hero">
            <div>
                <img src={HeroImg} alt="Hero" />
            </div>            
                
            
            <div className="hero-text">
                <div className="p1">
                    <p className="ui-ux">UI/UX Designer </p> 
                    <p className="p2"> with Business, Service Design & Brand Strategy Expertise</p>
                </div>
              
            </div>
            <div className="p3">
                 <p >8+ years professional experience, TU Delft MSc.<br />Based in Amsterdam<br />Roots in Jakarta</p>         
            </div>
           
        </div>       
    )
}

export default Hero;