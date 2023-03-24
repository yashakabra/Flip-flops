import React, { useState } from "react";
import "react-bootstrap";
import signimg from '../images/Sign.jpg';
import '../styles/UserLogin.css'
import { useUserAuth } from "../../context/UserAuthContext.js";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router";



const UserSignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]  =useState("");
    const [loading, setLoading] = useState(false);
    const {signUp, currentUser} = useUserAuth();
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

    // console.log(process.env.API_KEY)

    return (
        <div className="maincontainer">
            <div class="container-fluid">
                <div class="row no-gutter">
                    <div class="col-md-6 d-none d-md-flex bg-image">
                        <img alt="" style={{ maxHeight: 650, maxWidth: 700, marginLeft: "10%" }} />
                    </div>
                    {currentUser && currentUser.email}
                    <div class="col-md-6 mt-5 ">
                        <div class="login d-flex align-items-center py-5">
                            <div class="container mt-5">
                                <div class="row">
                                    <div class="col-lg-10 col-xl-7 mx-auto mt-5">
                                    {currentUser && currentUser.email}
                                        <h3 class="text-center display-4" style={{ color: "0095b6" }}>User SignUp</h3>
                                        {error && <Alert>{error}</Alert>}
                                        <form  onSubmit={handleSubmit}>
                                            <div class="form-group mb-3">
                                                <input onChange={(e)=>{setEmail(e.target.value)}} id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                            </div>
                                            <div class="form-group mb-3">
                                                <input onChange={(e)=>{setPassword(e.target.value)}} id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                            </div>
                           <p class="text-center mb-4" style={{ color: "red" }}>Already a member? <a href="" style={{textDecoration:"none"}}><span style={{ color: "orange" }}>Login here</span></a></p>
                                           <div class="text-center">
                                            <button disabled={loading} type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
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