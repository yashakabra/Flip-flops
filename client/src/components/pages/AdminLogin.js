import React from 'react';
import '../Styles/UserLogin.css';

const Adminlogin = () => {
  return (
    <>
        
        <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-6 d-none d-md-flex bg-image">
                <img alt="" style={{ maxHeight: 650, maxWidth: 700 ,marginLeft:"10%"}} />
                </div>


                
                <div class="col-md-6 bg-light ">
                    <div class="login d-flex align-items-center py-5">

                       
                        <div class="container mt-5">
                          
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto mt-5">
                                    <h3 class="text-center display-4" style={{color:"#0095b6"}}>Admin Login</h3>
                                    
                                    <form>
                                        <div class="form-group mb-3 mt-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                       
                                        <div class="text-center">
                                        <button type="submit" class="btn  btn-block text-uppercase mb-2 rounded-pill shadow-sm" style={{background:"#0095b6",color:"white"}}>Sign in</button>
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

export default Adminlogin;
