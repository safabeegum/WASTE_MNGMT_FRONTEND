import axios from 'axios'
import React, { useState } from 'react'
import UserNav from './UserNav'

const AddRequest = () => {

    const [input,setInput]=useState(
        {
            "quantity":"",
            "addinfo":"",
            "userId":sessionStorage.getItem("userId"), 
        }
    )

    const inputHandler=(event) =>{
        setInput({...input,[event.target.name]: event.target.value})
    }

    const readValues=(event) => {
        event.preventDefault();

        // Check if feedback is empty
        if (input.quantity.trim() === "") {
            alert("Please provide details before submitting.");
            return; // Exit the function if feedback is empty
        }

        console.log(input)
        axios.post("http://localhost:8080/addrequest", input, {headers:{"token":sessionStorage.getItem("token"), "Content-Type":"application/json"}
    } ).then(
        (response) => {
              if (response.data.status=="Success") 
              {
                alert("Request Added Successfully!!!")
                setInput({
                    "quantity": "",
                    "addinfo":""
                });
              } 
              else 
              {
                alert("Something went Wrong!!!")
              }  
        }
    ).catch(
        (error) => {
            console.log(error)
        }
    )
    }

  return (
    
<div>
    <UserNav/>
    <div className="container">
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="card mb-3">
                    <div class="row g-0">
                    <div class="col-md-4">
                    <img src="https://thumbs.dreamstime.com/b/fill-application-form-online-isolated-cartoon-vector-illustrations-school-graduate-fills-college-using-laptop-admission-307439796.jpg" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <label htmlFor="" className="form-label">ENTER THE QUANTITY</label>
                    <input type="text" className="form-control" name='quantity' value={input.quantity} onChange={inputHandler} />
                    <br></br><br></br>
                    <label htmlFor="" className="form-label">ADDITIONAL NOTE</label>
                    <textarea name="addinfo" placeholder ="Any Additional Note..!!" value={input.addinfo} rows="5" cols="50" className="form-control" onChange={inputHandler}></textarea>
                    <br></br>
                    <br></br>
                    <button onClick={readValues} className="btn btn-warning">Request Waste Pickup</button>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default AddRequest
