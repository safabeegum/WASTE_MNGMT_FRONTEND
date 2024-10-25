import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserNav from './UserNav';

const AddRequest = () => {
    const [input, setInput] = useState({
        userId: sessionStorage.getItem("userId"),
        address: '' // Initially empty
    });

    // Fetch user's address when the component mounts
    useEffect(() => {
        const fetchUserAddress = async () => {
            try {
                const userId = sessionStorage.getItem("userId");
                const token = sessionStorage.getItem("token");

                const response = await axios.get(`http://localhost:8080/getUserAddress/${userId}`, {
                    headers: { "token": token },
                });

                if (response.data) {
                    setInput(prevInput => ({
                        ...prevInput,
                        address: response.data.address, // Assuming response contains the user's address
                    }));
                }
            } catch (error) {
                console.error("Error fetching user address:", error);
            }
        };

        fetchUserAddress();
    }, []);

    const readValues = (event) => {
        event.preventDefault();

        // Check if address is available
        if (input.address.trim() === "") {
            alert("Address not found. Please try again.");
            return; // Exit if address is not available
        }

        console.log(input);
        axios.post("http://localhost:8080/addrequest", input, {
            headers: {
                "token": sessionStorage.getItem("token"),
                "Content-Type": "application/json",
            }
        }).then(
            (response) => {
                if (response.data.status === "Success") {
                    alert("Request Added Successfully!!!");
                    setInput({
                        userId: sessionStorage.getItem("userId"),
                        address: '', // Reset state after successful submission
                    });
                } else {
                    alert("Something went Wrong!!!");
                }
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <div>
            <UserNav />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://thumbs.dreamstime.com/b/fill-application-form-online-isolated-cartoon-vector-illustrations-school-graduate-fills-college-using-laptop-admission-307439796.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        {/* Display user's address */}
                                        <p><strong>User Address:</strong> {input.address}</p>
                                        <button onClick={readValues} className="btn btn-warning">Request Waste Pickup</button>
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

export default AddRequest;
