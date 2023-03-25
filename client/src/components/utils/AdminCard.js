import React from 'react'
import "../styles/Home.css";
import pic from '../images/pic.jpg';
import { useNavigate } from 'react-router-dom';

function AdminCard(props) {

  const navigate = useNavigate();
  const {details} = props;
  console.log(details);
  const cardSelect = () => {
    navigate(`/adminpanel/${details.email}`);
  }

  return (
    <div className="card-container mt-3">
      <div className="drop" >
        <div className="content">
          <img className="profile"></img>
          <div className="info">
            <h2>{details.email}</h2>
            <p>{details.statusCode}</p>
            <p>{details.disasterType}</p>
            <p>{details.place}</p>
            <p>Support Required-{details.amountNeeded}</p>
          </div>
          <button onClick={cardSelect}>Know more</button>
        </div>
      </div>
    </div>
  )
}

export default AdminCard;