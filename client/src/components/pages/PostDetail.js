import React from "react";
import { Link } from "react-router-dom";
import "../styles/PostDetails.css";
import pic from '../images/profile.jpg';

const PostDetails = () => {
  return (
    <>
      <div class="container-fluid p-0">
      <>
      <nav
        class="navbar navbar-expand-lg navbar-light  fixed-top"
        id="sideNav"
      >
        <Link class="navbar-brand js-scroll-trigger" to="/">
          <span class="d-block d-lg-none" >Clarence Taylor</span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={pic}
              alt="..."
            />
          </span>
        </Link>
       
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
          <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                Age-21
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                Location-Delhi
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                Disaster Type-Eaerthquake
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                Disaster Date-21 March 2021
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link js-scroll-trigger" >
                Lost worth- $500 
              </div>
            </li>
            <li>
            <button type="button" class="btn btn-primary" style={{fontWeight:"500",color:"black",backgroundColor:"white",border:"2px solid blue"}}>Donations Received-$200</button>

            </li>
          </ul>
        </div>
      </nav>
    </>        <section class="resume-section" id="about" style={{position:"absolute"}}>
          <div class="resume-section-content">
            <h1  >
              Clarence
              <span style={{color:"#0095b6"}}>Taylor</span>
            </h1>
            <div class="subheading mb-5">
               <t/><t/> · (317) 585-8468 ·
              <a href="mailto:name@email.com" style={{color:"#4682B4",paddingLeft:"15px"}}>name@email.com</a>
            </div>
            <h2 style={{fontsize:"5px",fontWeight:"200px"}}>My story of survival</h2>
            <p class="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
              I am experienced in leveraging agile frameworks to provide a
              robust synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <button type="button"  style={{fontWeight:"500",color:"white",backgroundColor:"#0095b6",padding:"10px",borderRadius:"5px"}}>DONATE if your WILL grants</button>
          
          </div>
        </section>

      </div>
    </>
  );
};

export default PostDetails;
