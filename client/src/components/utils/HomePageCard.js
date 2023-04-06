import React from 'react'
import "../styles/Home.css";
import pic from '../images/pic.jpg';
import {useNavigate} from 'react-router-dom'


function HomePageCard(props) {

  const navigate = useNavigate();
  const {details} = props;

  const cardSelect = () => {
    navigate(`/home/${details.email}`);
  }

  return (

    <div className="card-container mt-3">
      <div className="drop" >
        <div className="content">
          <img className="profile" src={details.photo}></img>
          <div className="info">
            <h2>{details.name}</h2>
            <p>{details.place}</p>
            <p>{details.disasterType}</p>
            <p>Support Required-${details.amountNeeded}</p>
          </div>
          <button onClick={cardSelect} style={{borderRadius:"5px"}}>Know more</button>
        </div>
      </div>
    </div>

  )
}

export default HomePageCard;