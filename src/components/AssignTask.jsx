import axios from 'axios'
import React, { useState } from 'react'
import AdminNav from './AdminNav';

const AssignTask = () => {

    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [input, setInput] = useState({
        "name": "",
        "date": "", 
        "time": "",  
        "addinfo": "", 
    });

    const inputHandler=(event) =>{
        setInput({...input,[event.target.name]: event.target.value})
    }

    const readValues=(event) => {
        event.preventDefault();
    
            axios.post("http://localhost:8080/assigntask", input,
                { headers: { "token": token, "Content-Type": "application/json" } })
                .then((response) => {
                    if (response.data.status === "Success") {
                        alert("Added Successfully!!!");
                        setInput({
                            "name": "",
                            "date": "", 
                            "time": "",  
                            "addinfo": "" 
                        });
                    } else {
                        alert("Something went wrong!!!");
                    }
                }).catch((error) => {
                    console.log(error);
                });
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
                                        <label htmlFor="" className="form-label">COLLECTOR NAME</label>
                                        <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">DATE OF PICKUP</label>
                                        <input type="date" className="form-control" name='date' value={input.date} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">TIME OF PICKUP</label>
                                        <input type="text" className="form-control" name='time' value={input.time} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">ADDITIONAL NOTE</label>
                                        <textarea name="addinfo" id="" className="form-control" value={input.addinfo} onChange={inputHandler}></textarea>
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="d-grid gap-2">
                                            <button onClick={readValues} className="btn btn-success">SUBMIT</button>
                                        </div>
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div class="d-grid gap-2">
                                        <a href="/requesttable" className="btn btn-secondary">GO BACK</a>
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

export default AssignTask
