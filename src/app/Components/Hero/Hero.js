import React,{useEffect} from "react";
import  "./Hero.css";
import YogaImage from"./images/Yoga1.jpg";


function Hero(){
    return(<>
    <div className="MainContainer">
    <img className="FeaturedImage" src={YogaImage} alt="Yoga"/>
    <div className="Text">
    <h1><b>Welcome to Anila</b></h1>
    <br></br>
    <p>Bibendum arcu vitae elementum curabitur vitae nunc.
     Integer enim neque volutpat ac tincidunt vitae semper quis.<br></br> Ut tristique et 
     egestas quis ipsum suspendisse ultrices. <br></br>Ac feugiat sed lectus vestibulum mattis ullamcorper.
      Aliquam ultrices sagittis orci a scelerisque. </p>
    <button>click me</button>
    <br></br>
    </div>
    </div>

    </>)
};


export default Hero; 