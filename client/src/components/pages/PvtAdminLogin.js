import React from 'react';
import '../styles/UserLogin.css';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import '../styles/UserLogin.css';
import { useState } from 'react';

const PvtAdminLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const submitHandler = async (event) => {
        event.preventDefault();
        if((email === process.env.REACT_APP_PVT_ADMIN_EMAIL_ID ) && (password === process.env.REACT_APP_PVT_ADMIN_PASSWORD)){
            console.log(":HIII")
            navigate('/pvtadminpanel');
        }else{
            setError("INVALID CREDENTIALS");
        }
    }

    return (
        <>
            <div className="maincontainer">
                <div class="container-fluid">
                    <div class="row no-gutter">
                        <div class="col-md-6 d-none d-md-flex bg-image">
                            <img alt="" style={{ maxHeight: 650, maxWidth: 700, marginLeft: "10%" }} />
                        </div>
                        <div class="col-md-6 bg-light ">
                            <div class="login d-flex align-items-center py-5">
                                <div class="container mt-5">

                                    <div class="row">
                                        <div class="col-lg-10 col-xl-7 mx-auto mt-5">
                                            <h3 class="text-center display-4" style={{ color: "#0095b6" }}>Private Admin Login</h3>
                                            {error && <Alert variant='danger'>{error}</Alert>}
                                            <form onSubmit={submitHandler}>
                                                <div class="form-group mb-3 mt-3">
                                                    <input onChange={(e) => { setEmail(e.target.value) }} id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                                </div>
                                                <div class="form-group mb-3">
                                                    <input onChange={(e) => { setPassword(e.target.value) }} id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                                </div>

                                                <div class="text-center">
                                                    <button type="submit" class="btn  btn-block text-uppercase mb-2 rounded-pill shadow-sm" style={{ background: "#0095b6", color: "white" }}>Sign in</button>
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

export default PvtAdminLogin;
