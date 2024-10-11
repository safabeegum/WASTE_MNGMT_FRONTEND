import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'
import UserNav from './UserNav'

const UserFeedback = () => {

    const [input,setInput]=useState(
        {"feedback":"", "userId":sessionStorage.getItem("userId")}
    )

    const inputHandler=(event) =>{
        setInput({...input,[event.target.name]: event.target.value})
    }

    const readValues=(event) => {
        event.preventDefault();

        // Check if feedback is empty
        if (input.feedback.trim() === "") {
            alert("Please provide your feedback before submitting.");
            return; // Exit the function if feedback is empty
        }

        console.log(input)
        axios.post("http://localhost:8080/userfeedback", input, {headers:{"token":sessionStorage.getItem("token"), "Content-Type":"application/json"}
    } ).then(
        (response) => {
              if (response.data.status=="Success") 
              {
                alert("Posted Successfully!!!")
                setInput({
                    "feedback": ""
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
                    <img src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title text-warning  fs-3">Post Your Feedback!!!</h5>
                    <textarea name="feedback" value={input.feedback} className="form-control" onChange={inputHandler}></textarea>
                    <br></br>
                    <br></br>
                    <button onClick={readValues} className="btn btn-warning">Submit your Feedback</button>
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

export default UserFeedback
