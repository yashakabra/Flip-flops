import React, { useState } from "react";
import '../styles/NavBar.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="Navbar">
      <span className="nav-logo" >     HelpingHand</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
      
        <a href="/signup">Add My Story</a>
        <div class="dropdown">
    <a href="#">Profile</a>
    <div class="dropdown-content">
      <a href="#">Option 2</a>
      <a href="#">Option 2</a>
      <a href="#">Option 2</a>
    </div>
  </div>
       
       
      
        
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </>
  );
};

  
  

export default NavBar;