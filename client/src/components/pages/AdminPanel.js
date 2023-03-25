import React, { useEffect ,useState} from "react";
import pic from '../images/pic.jpg';
import '../styles/Home.css'
import AdminCard from "../utils/AdminCard";
import { getUnverifiedUsers } from "../../api/AdminAPI";
import { useUserAuth } from "../../context/UserAuthContext";
const Adminpanel=()=>{
const {token} = useUserAuth();
const [users,setUsers]=useState([]);
const loadUnverifiedUsers = async (token)=>{
  const packet={token:token};
  const res=await getUnverifiedUsers(packet);
  setUsers(res.data);
  console.log('usoeif',res);
}

useEffect(()=>{
  console.log("po",token);
  if(!token)
  return;

loadUnverifiedUsers(token);

},[token]);  
return (
  <>
    <div className="main mt-4   ">
      <h1
        className="card-heading mt-3  mb-5"
        style={{ color: "#32cd32", fontSize: "50px" }}
      >
        asd
        {users &&
          users.map((user) => {
            console.log(user);
          })}
      </h1>
      <div className="card-container"></div>
    </div>
  </>
);
}
export default Adminpanel;