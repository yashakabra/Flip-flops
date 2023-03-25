import React, { useEffect, useState } from "react";
import pic from '../images/pic.jpg';
import '../styles/Home.css'
import AdminCard from "../utils/AdminCard";
import { getUnverifiedUsersGovt } from "../../api/AdminAPI";


const Adminpanel = () => {
  const [users, setUsers] = useState([]);

  const loadUnverifiedUsers = async () => {
    const packet = {
      email: process.env.REACT_APP_ADMIN_EMAIL_ID,
      password: process.env.REACT_APP_ADMIN_PASSWORD,
    };
    const res = await getUnverifiedUsersGovt(packet);
    setUsers(res.data);
    console.log('usoeif', res);
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
              return <AdminCard key={user.email} details={user} />
            })}
        </h1>
        <div className="card-container"></div>
      </div>
    </>
  );
}
export default Adminpanel;