import React from "react";
import '../styles/Home.css'
import pic from '../images/pic.jpg';
import homeimg from '../images/Homeimg.jpg'
import secure from '../images/secure.png'
import govtverified from '../images/governmentverified.png';
import easytouse from '../images/easytouse.png';
const Home = (props) => {
    




    return (
        <>
        <div className="maincontainer mt-5 mb-5">
        <div className="container-fluid mt-5">
          <div className="row no-gutter">

            <div className="col-md-5 d-none d-md-flex bg-image mt-4">
              <img src={homeimg} alt="" style={{ maxHeight: 500, maxWidth: 500, marginLeft: "10%" }} />
            </div>



            <div className="text-center col-md-7 mt-5 ">
              <div className="login d-flex align-items-center py-8">


                <div className="container mt-5">

                  <div className="row">
                    <div className="mx-auto">
                      <h1 className="display-4 mb-3" style={{ color: "red" }}>No act of kindness, no matter how small, is ever wasted.</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="main">
        <h1 className="story-heading"  style={{ fontSize: "60px" }}>Our Stories</h1>
      <div className="card-container mt-3">
      
       
      </div>



   








    </div>

      









    




   

      <div className="yourstory">
        <h5 className="yourstory-heading" style={{ marginTop: "1rem" }}>Have a story??<span style={{ color: "#0095b6" }}><a href="" style={{textDecoration:"none"}}>Share with us...</a> </span></h5>
      </div>

      <div className="login d-flex align-items-center py-8">


        <div className="container mt-3">

          <div className="row">
            <div className="mx-auto ">
              <h1 style={{ fontSize: "60px" }}>
                Why trust Us?
              </h1>
              <div className="wrapper mb-4 mt-5">
                <div className="box">
                  <div className="front-face ">
                   
                
                      <img src={secure} style={{height:"20px",width:"20px"}}></img>
                      <span>      Secured payment gateway</span>
                  </div>
                  <div className="back-face">
                    <span>Secured payment gateway</span>
                    <p>
                    Secured payment gateway which enables direct transfer without inclusion of an intermediate party.

                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="front-face">
                
                   <img src={govtverified} style={{height:"20px",width:"20px"}}></img>
                   <span>   Government Verified Users</span>
              
                  </div>
                  <div className="back-face">
                    <span>Government Verified Users</span>
                    <p>
                     All the victims will be directly Verified by government officials so no need to worry about your money going at a wrong place.
                    </p>
                  </div>
                </div>
                <div className="box">
                  <div className="front-face">
                  <img src={easytouse} style={{height:"20px",width:"20px"}}></img>
                  <span> Easy to manage</span>
                  </div>
                  <div className="back-face">
                    <span>Easy to manage</span>
                    <p>
                    an easy-to-manage website is one that prioritizes simplicity, usability, and accessibility.
                    </p>
                  </div>
                </div>
              
              </div>

            </div>
          </div>
        </div>

      </div>

    </>

    );
}

export default Home;