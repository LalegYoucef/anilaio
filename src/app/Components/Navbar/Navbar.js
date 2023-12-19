import React,{useEffect} from "react";
import  "./Navbar.css";
import anilalogo from "./images/AnilaLogo.png"


function Navbar(){

    return(
        <>
        <div className="FirstContainer">
        <nav className="nav">
    
        <div className="logo">
            <img className= "logo" src={anilalogo}></img>
        </div>
        <div className="NavList" id="NavList">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Catalogue</a></li>
                <li><a href="#">About us</a></li>
            </ul>
        </div>
   
</nav>
    
</div>
        </>
    )



};

export default Navbar;



