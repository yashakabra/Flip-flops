import React, { useEffect, useState } from "react";
import pic from '../images/pic.jpg';
import '../styles/Home.css'
import PvtAdminCard from "../utils/PvtAdminCard";
import { getUnverifiedUsers } from "../../api/AdminAPI";
import { useParams } from "react-router-dom";


const PvtAdminPanel = () => {

    const [users, setUsers] = useState([]);
    const useremail = useParams();
    console.log("HERE    EEE ",useremail);
    const loadUnverifiedUsers = async () => {
        const packet = {
            email: process.env.REACT_APP_PVT_ADMIN_EMAIL_ID,
            password: process.env.REACT_APP_PVT_ADMIN_PASSWORD,
            useremail:useremail,
        };
        try{
            const res = await getUnverifiedUsers(packet);
            console.log(res.data);
            setUsers(res.data);
            // setUsers
            console.log('usoeif', res);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        loadUnverifiedUsers();
    }, []);

    return (
        <>
            <div className="main mt-4   ">
                <h1
                    className="card-heading mt-3  mb-5"
                    style={{ color: "#32cd32", fontSize: "50px" }}>
                    {users &&
                        users.map((user) => {
                            return <PvtAdminCard key={user.email} details={user} />
                        })}
                </h1>
                <div className="card-container"></div>
            </div>
        </>
    );
}
export default PvtAdminPanel;