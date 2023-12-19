import React from 'react';
import "./Footer.css"
function Footer() {
  return (
 

      <>

    <footer className="simple-footer">
      <div className="CopyRight">
        <p>&copy; {new Date().getFullYear()} Anila . All rights reserved.</p>
      </div>
      <div className='QuickLinks'>
      <h3>Join us</h3>
        <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
        </ul>
        </div>
        <div className='Description'>
          <h3>Our Brand</h3>
          <p>Lorem Ipsum es simplemente el texto de relleno de las
           imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno están</p>
        </div>
        <div className='SocialMedia'>
          <ul>
            <li>MyName</li>
          </ul>
        </div>
      
    </footer>
    </>
  );
}


    


export default Footer;
