import React, { useEffect } from 'react';
import '../styles/UserLogin.css'
import signimg from '../images/Sign.jpg'
import { Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../../context/UserAuthContext';

const UserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, logOut } = useUserAuth();

    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setError("");
            await logIn(email, password);
            navigate('/home');
        } catch (err) {
            setError(err.message);
        }
    };

    const logout = async () => {
        await logOut();
    }

    useEffect(()=>{
        logout();
    },[]);

    return (
        <>
            <div className="maincontainer">
                <div class="container-fluid">
                    <div class="row no-gutter">
                        <div class="col-md-6 d-none d-md-flex bg-image">
                            <img src={signimg} alt="" style={{ maxHeight: 650, maxWidth: 700, marginLeft: "10%" }} />
                        </div>
                        <div class="col-md-6  mt-5 ">
                            <div class="login d-flex align-items-center py-5">
                                <div class="container mt-5">
                                    <div class="row">
                                        <div class="col-lg-10 col-xl-7 mx-auto">
                                            <h3 class="text-center display-4" style={{ color: "0095b6" }}>User Login</h3>
                                            {error && <Alert variant='danger'>{error}</Alert>}
                                            <form onSubmit={handleSubmit}>
                                                <div class="form-group mb-3 mt-3">
                                                    <input onChange={(e)=>{setEmail(e.target.value)}} id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                                </div>
                                                <div class="form-group mb-3">
                                                    <input onChange={(e)=>{setPassword(e.target.value)}} id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                                </div>
                                                <p class="text-center mb-4" style={{ color: "red" }}>Don't have an account?<a href='' style={{ textDecoration: "none" }} ><span style={{ color: "orange" }}> SignUp here</span></a></p>
                                                <div class="text-center">
                                                    <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Login</button>
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