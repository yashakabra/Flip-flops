import React, { useState } from "react";
import "react-bootstrap";
import '../styles/UserLogin.css'
import { useUserAuth } from "../../context/UserAuthContext.js";
import { TextField} from "@mui/material";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import signimg from '../images/sign.gif'



const UserSignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]  =useState("");
    const [loading, setLoading] = useState(false);
    const {signUp, user, logOut} = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(email, password);
        try {
            setLoading(true);
            await signUp(email, password);
            navigate('/userlogin');
        }catch(error){
            setError("Failed to create an account !");
            console.log(error);
        }
        setLoading(false);
    }

    const logout = async () => {
        await logOut();
    }

    useEffect(()=>{
        logout();
    },[]);

    return (
        <div className="maincontainer mt-5">
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="col-md-6 d-none d-md-flex bg-image">
                        <img src={signimg} alt="" style={{height:"700px" ,width:"800px",marginLeft:"80px"}}/>
                    </div>
                    {/* {u && currentUser.email} */}
                    <div class="col-md-6 mt-5 ">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container mt-5">
                                <div class="row" style={{width:"1000px"}}>
                                    <div class="col-lg-10 col-xl-7 mx-auto mt-5">
                                    {/* {currentUser && currentUser.email} */}
                                        <h3 class="text-center display-4" style={{ color: "0095b6",fontWeight:"500" }}>User SignUp</h3>
                                        {error && <Alert>{error}</Alert>}
                                        <form  onSubmit={handleSubmit}>
                                            {/* <div class="form-group mb-3">
                                                <input onChange={(e)=>{setEmail(e.target.value)}} id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input onChange={(e)=>{setPassword(e.target.value)}} id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                            </div> */}
                                            <TextField
                          margin="normal"
                          required
                          fullWidth
                          name=""
                          label="Email address"
                          type="email"
                          id="inputEmail"
                          value={email}
                          onChange={(e)=>{setEmail(e.target.value)}} 
                        />
                                                <TextField
                          margin="normal"
                          required
                          fullWidth
                          name=""
                          label="Password"
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e)=>{setPassword(e.target.value)}}
                        />
                           <p class="text-center mb-4" style={{ color: "red" }}>Already a member? <a href="/userlogin" style={{textDecoration:"none"}}><span style={{ color: "orange" }}>Login here</span></a></p>
                                           <div class="text-center">
                                           <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 shadow-sm "  style={{padding:"10px 10px",fontWeight:"600"}}>Sign Up</button>
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
    );
}

export default UserSignUp;