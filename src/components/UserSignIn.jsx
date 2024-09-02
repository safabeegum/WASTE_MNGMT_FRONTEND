import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserSignIn = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "", 
        password: ""
    });

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const readValues = () => {
        console.log(input);

        axios.post("http://localhost:8080/signin", input)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "Incorrect Password") {
                    alert("Incorrect Password");
                } else if (response.data.status === "Invalid Email ID") {
                    alert("Incorrect Password or Email ID");
                } else {
                    let token = response.data.token;
                    let userId = response.data.userId;
                    console.log(userId);
                    console.log(token);

                    sessionStorage.setItem("userId",userId)
                    sessionStorage.setItem("token",token)
                    navigate("/userhome")
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="container">
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="password" name="password" id="" className="form-control" value={input.password} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <button onClick={readValues} className="btn btn-success">SIGNIN</button>
                        </div>

                        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <a href="/usersignup" className="btn btn-secondary">NEW USERS</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSignIn;
