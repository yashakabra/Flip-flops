import React, { useEffect, useState } from 'react'
import '../styles/AdminDetailsPanel.css'
import pic from '../images/profile.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import { getSinglePostDetailsAdmin } from '../../api/AdminAPI';
import { addUserPostDetailsAdmin } from '../../api/AdminAPI';

const defaultCase = {
    email: "",
    name: "",
    age: "",
    place: "",
    disasterType: "",
    aadharNo: "",
    phoneNo: "",
    amountNeeded: "",
    upiId: "",
    date: "",
    blog: "",
    photo: "",
    statusCode: 0,
}

function PvtAdminDetailsPanel() {

    const [details, setDetails] = useState(defaultCase);
    const email = useParams().id;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetails = async () => {
            const packet = {
                email: process.env.REACT_APP_PVT_ADMIN_EMAIL_ID,
                password: process.env.REACT_APP_PVT_ADMIN_PASSWORD,
                useremail: email,
            };
            const response = await getSinglePostDetailsAdmin(packet);
            setDetails(response.data);
        };
        fetchDetails();
    }, [])

    const acceptButton = async () => {
        const newDetails = details;
        newDetails.statusCode = 1;
        const packet = {
            email: process.env.REACT_APP_PVT_ADMIN_EMAIL_ID,
            password: process.env.REACT_APP_PVT_ADMIN_PASSWORD,
            data: newDetails,
        }
        await addUserPostDetailsAdmin(packet);
        navigate('/pvtadminpanel')
    }

    const rejectButton = async () => {
        const newDetails = details;
        newDetails.statusCode = -1;
        const packet = {
            email: process.env.REACT_APP_PVT_ADMIN_EMAIL_ID,
            password: process.env.REACT_APP_PVT_ADMIN_PASSWORD,
            data: newDetails,
        }
        await addUserPostDetailsAdmin(packet);
        navigate('/pvtadminpanel')
    }

    return (
        <div>
            <div className="main">
                <div className="app">
                    {
                        <div className="details" >
                            <div className="big-img" >
                                <img src={details.photo} alt="" />
                            </div>
                            <div className="box">
                                <div className="row">
                                    <h2>{details.name}</h2>
                                </div>
                                <p><span className="title">Place of Disaster-</span>{details.place}</p>
                                <p><span className="title">Date of Disaster -</span>{details.date}</p>
                                <p><span className="title">Type of Disaster-</span>{details.disasterType}</p>
                                <p><span className="title">AADHAR Card Number-</span>{details.aadharNo}</p>
                                <p><span className="title">Phone Number-</span>{details.phoneNo}</p>
                                <p><span className="title">UPI ID-</span>{details.upiId}</p>
                                <p><span className="title">Amount needed to resettle-</span>${details.amountNeeded}</p>
                                <button className="accept" onClick={acceptButton}>Accept</button>
                                <button className="reject" onClick={rejectButton}>Reject</button>

                            </div>
                        </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default PvtAdminDetailsPanel;
