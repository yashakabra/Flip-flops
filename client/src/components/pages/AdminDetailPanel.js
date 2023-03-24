import React from 'react'
import '../styles/AdminDetailsPanel.css'
import pic from '../images/profile.jpg';
function AdminDetailsPanel() {
  return (
    <div>
       <div className="main">
 <div className="app">
        {
            <div className="details" >
              <div className="big-img" >
                <img src={pic} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>Vaishnavi Tripathi</h2>
                </div>

                <p><span className="title">Place of Disaster-</span>Delhi</p>
                <p><span className="title">Date of Disaster -</span>21 March 2021</p>
                <p><span className="title">Type of Disaster-</span>Earthquake</p>
                <p><span className="title">AADHAR Card Number-</span>9662 65652 1742</p>
                <p><span className="title">Phone Number-</span>9336506901</p>
                <p><span className="title">UPI ID-</span>vaishnavi@oksbi</p>
                <p><span className="title">Amount needed to resettle-</span>$500</p>
                <button className="accept">Accept</button>
                <button className="reject">Reject</button>

              </div>
            </div>
          
        }
      </div>
      </div>
    </div>
  )
}

export default AdminDetailsPanel;
