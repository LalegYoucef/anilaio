import React,{useEffect} from "react";
import  "./TeacherCard.css";
import YogaImage from"./images/Yoga2.jpg";


function TeacherCard(){
    return(<>
    <div className="MainContainer">
    <img className="FeaturedImage" src={YogaImage} alt="Yoga"/>
    <div className="Text">
    <h1><b> Lili Gomez</b></h1>
        <br></br>
        <h2>Experta en todo</h2>
    <br></br>
    <p>Bibendum arcu vitae elementum curabitur vitae nunc.
     Integer enim neque volutpat ac tincidunt vitae semper quis.<br></br> Ut tristique et 
     egestas quis ipsum suspendisse ultrices. <br></br>Ac feugiat sed lectus vestibulum mattis ullamcorper.
      Aliquam ultrices sagittis orci a scelerisque. </p>
    <br></br>
    </div>
    </div>

    </>)
};


export default TeacherCard; 