import React from 'react'
import "../styles/Home.css";
import pic from '../images/pic.jpg';
function HomePageCard() {
  return (
    
    <div className="card-container mt-3">
       
        <div className="drop" >
            <div className="content">
            <img className="profile" src={pic}></img>
            <div className="info">
            <h2>Bean Chaudhary</h2>
                <p>Cyclone effected</p>
                <p>Delhi,India</p>
                <p>Support Required-$230</p>
            </div>
                

                <button>Know more</button>

            </div>
        </div>
     
      </div>
    
  )
}

export default HomePageCard;