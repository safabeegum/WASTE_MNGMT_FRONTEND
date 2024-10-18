import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const UserSignUp = () => {

    const [input, setInput] = useState({
        "first_name": "",
        "last_name": "", 
        "address": "", 
        "district": "",  
        "lsgi_type": "", 
        "lsgi_name": "", 
        "ward_name": "", 
        "email": "", 
        "phone": "", 
        "password": "",
        "confirmpass": ""
    });

    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength) {
            return "Password must be at least 8 characters long";
        }
        if (!hasUpperCase) {
            return "Password must include at least one uppercase letter";
        }
        if (!hasLowerCase) {
            return "Password must include at least one lowercase letter";
        }
        if (!hasNumber) {
            return "Password must include at least one number";
        }
        if (!hasSpecialChar) {
            return "Password must include at least one special character";
        }
        return null; // Password is valid
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            return "Phone number must be 10 digits";
        }
        return null; // Phone number is valid
    };

    const readValue = (event) => {
        event.preventDefault(); // Prevent form submission
        
        const passwordError = validatePassword(input.password);
        const phoneError = validatePhone(input.phone);

        if (passwordError) {
            alert(passwordError);
            return;
        }

        if (phoneError) {
            alert(phoneError);
            return;
        }

        if (input.password !== input.confirmpass) {
            alert("Passwords do not match!!");
            return;
        }

        let newInput = { 
            "first_name": input.first_name,
            "last_name": input.last_name, 
            "address": input.address, 
            "district": input.district,  
            "lsgi_type": input.lsgi_type, 
            "lsgi_name": input.lsgi_name, 
            "ward_name": input.ward_name, 
            "email": input.email, 
            "phone": input.phone, 
            "password": input.password
        };

        axios.post("http://localhost:8080/signup", newInput)
        .then((response) => {
            console.log(response.data);
            if (response.data.status === 'Success') {
                alert("Registered Successfully!!!");
                setInput({ 
                    "first_name": "",
                    "last_name": "", 
                    "address": "", 
                    "district": "",  
                    "lsgi_type": "", 
                    "lsgi_name": "", 
                    "ward_name": "", 
                    "email": "", 
                    "phone": "", 
                    "password": "",
                    "confirmpass": ""
                });
            } else {
                alert("Email ID Already Exists!!!");
                setInput({ 
                    "first_name": "",
                    "last_name": "", 
                    "address": "", 
                    "district": "",  
                    "lsgi_type": "", 
                    "lsgi_name": "", 
                    "ward_name": "", 
                    "email": "", 
                    "phone": "", 
                    "password": "",
                    "confirmpass": ""
                });
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
                        <div className="card border-light mb-3">
                            <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?t=st=1728673549~exp=1728677149~hmac=2eaba6ea0d03fa1b772586b23d7adf285866e3e1f24b6e2cbcb6d2d58adec9d0&w=740" className="card-img-top" alt="..."></img>
                        </div>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-6 col-xl-6 col-xxl-6">
                        <div className="card border-light mb-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    {/* Form Fields */}
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">FIRST NAME</label>
                                        <input type="text" className="form-control" name='first_name' value={input.first_name} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">LAST NAME</label>
                                        <input type="text" className="form-control" name='last_name' value={input.last_name} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">ADDRESS</label>
                                        <textarea name="address" id="" className="form-control" value={input.address} onChange={inputHandler}></textarea>
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DISTRICT</label>
                            <select name="district" id="" className="form-control" value={input.district} onChange={inputHandler}>
                            <option value="">---SELECT HERE---</option>
                            <option value="Trivandrum">Trivandrum</option>
                            <option value="Kollam">Kollam</option>
                            <option value="Pathanamthitta">Pathanamthitta</option>
                            <option value="Alappuzha">Alappuzha</option>
                            <option value="Kottayam">Kottayam</option>
                            <option value="Idukki">Idukki</option>
                            <option value="Ernakulam">Ernakulam</option>
                            <option value="Thrissur">Thrissur</option>
                            <option value="Palakkad">Palakkad</option>
                            <option value="Malappuram">Malappuram</option>
                            <option value="Kozhikode">Kozhikode</option>
                            <option value="Kannur">Kannur</option>
                            <option value="Wayanad">Wayanad</option>
                            <option value="Kasargode">Kasargode</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">LSGI TYPE</label>
                            <select name="lsgi_type" id="" className="form-control" value={input.lsgi_type} onChange={inputHandler}>
                            <option value="">---SELECT HERE---</option>
                            <option value="Coorporation">Coorporation</option>
                            <option value="Muncipality">Muncipality</option>
                            <option value="Panchayat">Panchayat</option>
                            </select>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">LSGI NAME</label>
                            <input type="text" className="form-control" name='lsgi_name' value={input.lsgi_name} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">WARD NAME</label>
                            <input type="text" className="form-control" name='ward_name' value={input.ward_name} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">CONTACT NUMBER</label>
                            <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>
                        </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">PASSWORD</label>
                                        <input type="password" name="password" id="" className="form-control" value={input.password} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                        <input type="password" name="confirmpass" id="" className="form-control" value={input.confirmpass} onChange={inputHandler} />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="d-grid gap-2">
                                            <button onClick={readValue} className="btn btn-success">SUBMIT</button>
                                        </div>
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="d-grid gap-2">
                                            <a href="/usersignin" className="btn btn-secondary">LOGIN PAGE</a>
                                        </div>
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

export default UserSignUp;
