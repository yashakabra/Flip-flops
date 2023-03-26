import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/PostDetails.css";
import pic from '../images/profile.jpg';
import { useUserAuth } from "../../context/UserAuthContext";
import { getSinglePostDetails } from "../../api/UserAPI";
import { useState } from "react";
import { grey } from "@mui/material/colors";

const defaultValue = {
      email: "",
      statusCode:0,
      name: "",
      age: 0,
      place: "",
      disasterType: "",
      aadharNo: "",
      phoneNo: "",
      amountNeeded: "",
      upiId: "",
      date: "",
      blog: "",
      photo: "",
}

const PostDetails = () => {
  const [textToCopy,setTextToCopy] = useState("123456789");

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Error copying text: ', err);
    }
  }

  const {token, user} = useUserAuth();
  const email = useParams().id;
  const [post, setPost] = useState(defaultValue);

  const fetchDetails = async () => {
    const packet = {
      token : token,
      email: email,
    }
    const response = await getSinglePostDetails(packet);
    setPost(response.data);
  }

  useEffect(()=>{
    if(token == null)return;
    fetchDetails();
  }, [token]);

  return (
    <>
      <div class="container-fluid p-0">
      <>
      <nav
        class="navbar navbar-expand-lg navbar-light  fixed-top"
        id="sideNav"
      >
        <Link class="navbar-brand js-scroll-trigger" to="/">
          <span class="d-block d-lg-none" >{post.name}</span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={post.photo}
              alt="..."
            />
          </span>
        </Link>
       
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
          <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                {post.age}
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                {post.place}
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                Disaster Type-{post.disasterType}
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                Disaster Date-{post.date}
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                Lost worth- ${post.amountNeeded} 
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                UPI ID-<span style={{textDecoration:"underline"}}>{textToCopy}</span>
                <div>
      <button onClick={handleCopyClick} style={{fontSize:"10px",borderRadius:"3px",fontWeight:"500",padding:"2px 2px",backgroundColor:"grey"}}>Copy UPI to clipboard</button>
    </div>

              </div>
            </li>
           
          </ul>
        </div>
      </nav>
    </>        <section class="resume-section" id="about" style={{position:"absolute"}}>
          <div class="resume-section-content">
            {/* <h1  >
              Clarence
              <span style={{color:"#0095b6"}}>Taylor</span>
            </h1> */}
            <div class="subheading mb-5">
               <t/><t/> {post.phoneNo}
              <a href="mailto:name@email.com" style={{color:"#4682B4",paddingLeft:"15px"}}>{user.email}</a>
            </div>
            <h2 style={{fontsize:"5px",fontWeight:"200px"}}>My story of survival</h2>
            <p class="lead mb-5">
              {post.blog}
            </p>
            <button type="button"  style={{fontWeight:"500",color:"white",backgroundColor:"#0095b6",padding:"10px",borderRadius:"5px"}}>DONATE if your WILL grants</button>
          
          </div>
        </section>

      </div>
    </>
  );
};

export default PostDetails;
