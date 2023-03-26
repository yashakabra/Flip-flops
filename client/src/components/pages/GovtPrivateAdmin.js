import React from "react";
import adminLogin from '../images/adminLogin.gif';

const GovtPrivateAdmin=()=>{
  return(
    <section
  id="getstarted"
  class="text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
>
  <div class="container-fluid  text-dark p-3 mb-5">
    <h1 class="text-center pt-5" style={{}}>LETS GET STARTED!</h1>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <img
          
          src={adminLogin}
          alt=""
          width="550px"
          height="550px"
        />
        <h2 class="text-center">Govt Admin Login</h2>
       
        <div class="text-center gap-2 mb-5">
          <a href="/adminlogin" class="btn btn-primary" style={{width:"90px",fontSize:"20px",alignItems:"center"}}> Log In </a>
        </div>
      </div>
      <div class="col-md-6">
        <img
          src={adminLogin}
          alt=""
          width="550px"
          height="550px"
        />
        <h2 class="text-center">Private Admin login</h2>
       
        <div class="text-center gap-2 mb-5">
          <a href="/pvtadminlogin" class="btn btn-primary" style={{width:"90px",fontSize:"20px",alignItems:"center"}}> Log In </a>
        </div>
      </div>
    </div>
  </div>

 
</section>
  );

}
export default GovtPrivateAdmin;