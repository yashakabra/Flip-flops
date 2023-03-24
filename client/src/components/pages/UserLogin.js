import React from 'react';
import '../Styles/UserLogin.css'
import signimg from '../Images/Sign.jpg'
const UserLogin = () => {
  return (
    <>   
          <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-6 d-none d-md-flex bg-image">
                <img src={signimg} alt="" style={{ maxHeight: 650, maxWidth: 700 ,marginLeft:"10%"}} />
                </div>


                
                <div class="col-md-6  mt-5 ">
                    <div class="login d-flex align-items-center py-5">

                       
                        <div class="container mt-5">
                          
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h3 class="text-center display-4" style={{color:"0095b6"}}>User Login</h3>
                                   
                                    <form>
                                        <div class="form-group mb-3 mt-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <p class="text-center mb-4" style={{color:"red"}}>Don't have an account?<a href='' style={{textDecoration:"none"}} ><span style={{color:"orange"}}> SignUp here</span></a></p>
                                        <div class="text-center">
                                        <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign Up</button>
                                       </div>
                                    </form>
                                </div>
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

export default UserLogin;