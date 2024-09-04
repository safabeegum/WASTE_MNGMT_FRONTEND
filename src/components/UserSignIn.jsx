import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

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
            <Nav/>
            <div className="container">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
            <div class="card border-light mb-3">
            <img src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg?t=st=1725446364~exp=1725449964~hmac=b3e79e458d7f30571e2e8a04cccc86ba38e2293d1ca5eb7aeca52676d5b7cda7&w=740" class="card-img-top" alt="..."></img>
            <div class="card-body">
            </div>
            </div>
            </div>

            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
            <div class="card border-light mb-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
            <br></br><br></br><br></br><br></br>
                <label htmlFor="" className="form-label">EMAIL ID</label>
                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">PASSWORD</label>
                <input type="password" name="password" id="" className="form-control" value={input.password} onChange={inputHandler} />
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                <button onClick={readValues} className="btn btn-success">SIGN IN</button>
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
            <a href="/usersignup" className="btn btn-secondary">NEW USER?</a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
          </div>
    );
};

export default UserSignIn;
