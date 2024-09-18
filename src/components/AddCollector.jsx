import axios from 'axios'
import React, { useState } from 'react'
import AdminNav from './AdminNav';

const AddCollector = () => {

    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [input, setInput] = useState({
        "name": "",
        "address": "", 
        "district": "",  
        "lsgi_type": "", 
        "lsgi_name": "", 
        "ward_name": "", 
        "phone": "", 
    });

    const [errors, setErrors] = useState({}); // State for validation errors

    // Function to validate the phone number
    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            return "Phone number must be 10 digits";
        }
        return null; // Phone number is valid
    };

    const inputHandler = (event) => {
        const { name, value } = event.target;

        // Update form input
        setInput({ ...input, [name]: value });

        // If the field is 'phone', validate it and update error state
        if (name === 'phone') {
            const phoneError = validatePhone(value);
            setErrors({ ...errors, phone: phoneError });
        }
    };

    const readValue = () => {
        // Validate phone number before submission
        const phoneError = validatePhone(input.phone);

        if (phoneError) {
            setErrors({ ...errors, phone: phoneError });
            alert("Phone number must be 10 digits");
            return;
        } else {
            axios.post("http://localhost:8080/addcollector", input,
                { headers: { "token": token, "Content-Type": "application/json" } })
                .then((response) => {
                    if (response.data.status === "Success") {
                        alert("Added Successfully!!!");
                        setInput({
                            "name": "",
                            "address": "", 
                            "district": "",  
                            "lsgi_type": "", 
                            "lsgi_name": "", 
                            "ward_name": "", 
                            "phone": "", 
                        });
                        setErrors({});
                    } else {
                        alert("Something went wrong!!!");
                    }
                }).catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div>
            <AdminNav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
                        <div className="card border-light mb-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">NAME</label>
                                        <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
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

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">LSGI NAME</label>
                                        <input type="text" className="form-control" name='lsgi_name' value={input.lsgi_name} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">WARD NAME</label>
                                        <input type="text" className="form-control" name='ward_name' value={input.ward_name} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">CONTACT NUMBER</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name='phone'
                                            value={input.phone}
                                            onChange={inputHandler}
                                            maxLength={10} // Limit input to 10 characters
                                        />
                                        {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
                                        <div className="d-grid gap-2">
                                            <button onClick={readValue} className="btn btn-success">SUBMIT</button>
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
}

export default AddCollector;
