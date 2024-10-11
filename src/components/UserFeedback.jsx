import axios from 'axios'
import React, { useState } from 'react'
import UserNav from './UserNav'

const UserFeedback = () => {

    const [input,setInput]=useState(
        {"feedback":"", "userId":sessionStorage.getItem("userId"), }
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
                alert("Feedback Added Successfully!!!")
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
                    <img src="https://cdn.botpenguin.com/assets/website/User_Feedback_d4677ac183.png" class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <textarea name="feedback" placeholder ="Enter your Feedback!!!" value={input.feedback} rows="10" cols="50" className="form-control" onChange={inputHandler}></textarea>
                    <br></br>
                    <br></br>
                    <button onClick={readValues} className="btn btn-primary">Submit your Feedback</button>
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
