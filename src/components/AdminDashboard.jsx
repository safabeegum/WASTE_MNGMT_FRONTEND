import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';

const AdminDashboard = () => {
    const [requests, setRequests] = useState([]);
    const [workers, setWorkers] = useState([]);
    const [assignments, setAssignments] = useState({}); // To keep track of worker assignments

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get("http://localhost:8080/getRequests", {
                    headers: { "token": sessionStorage.getItem("token") },
                });
                console.log("Fetched Requests:", response.data); // For debugging
                setRequests(response.data);
            } catch (error) {
                console.error("Error fetching requests:", error);
            }
        };

        const fetchWorkers = async () => {
            try {
                const response = await axios.get("http://localhost:8080/getWorkers", {
                    headers: { "token": sessionStorage.getItem("token") },
                });
                console.log("Fetched Workers:", response.data); // For debugging
                setWorkers(response.data);
            } catch (error) {
                console.error("Error fetching workers:", error);
            }
        };

        fetchRequests();
        fetchWorkers();
    }, []);

    const assignWorker = async (requestId) => {
        const { workerId, assignedDate, assignedTime } = assignments[requestId];

        console.log("Assigning Worker:", { requestId, workerId, assignedDate, assignedTime }); // Log the assignment details

        try {
            const response = await axios.post(`http://localhost:8080/assigntask/${requestId}`, {
                workerId,
                assignedDate,
                assignedTime,
            }, {
                headers: { "token": sessionStorage.getItem("token") } // Include token in headers
            });

            if (response.data.status === "Worker Assigned Successfully") {
                alert("Worker Assigned Successfully!");
                
                // Reset the assignments state for the specific requestId
                setAssignments((prevAssignments) => ({
                    ...prevAssignments,
                    [requestId]: {
                        workerId: "", // Resetting workerId
                        assignedDate: "", // Resetting assignedDate
                        assignedTime: "", // Resetting assignedTime
                    },
                }));

                // Update the requests state to reflect the assigned worker
                setRequests((prevRequests) => 
                    prevRequests.map((request) => 
                        request._id === requestId ? { ...request, assignedWorker: workerId } : request
                    )
                );
            } else {
                alert("Failed to assign worker.");
            }
        } catch (error) {
            console.error("Error assigning worker:", error);
        }
    };

    const handleInputChange = (requestId, field, value) => {
        setAssignments((prevAssignments) => ({
            ...prevAssignments,
            [requestId]: {
                ...prevAssignments[requestId],
                [field]: value,
            },
        }));
    };

    return (
        <div>
            <AdminNav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>REQUEST ID</th>
                                <th>USER</th>
                                <th>ADDRESS</th>
                                <th>REQUESTED DATE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.length === 0 ? (
                                <tr>
                                    <td colSpan="5">No requests available.</td>
                                </tr>
                            ) : (
                                requests.map(request => (
                                    <tr key={request._id}>
                                        <td>{request._id}</td>
                                        <td>{request.userId.first_name} {request.userId.last_name}</td>
                                        <td>{request.userId.address}</td>
                                        <td>{new Date(request.requestedDate).toLocaleString()}</td>
                                        <td>
                                            <select
                                                value={assignments[request._id]?.workerId || ""}
                                                onChange={(e) => handleInputChange(request._id, 'workerId', e.target.value)}
                                            >
                                                <option value="">Select Worker</option>
                                                {workers.map(worker => (
                                                    <option key={worker._id} value={worker._id}>
                                                        {worker.username} (ID: {worker._id})
                                                    </option>
                                                ))}
                                            </select>
                                            <input 
                                                type="date" 
                                                value={assignments[request._id]?.assignedDate || ""} // Set the value to the assignment state
                                                onChange={(e) => handleInputChange(request._id, 'assignedDate', e.target.value)} 
                                            />
                                            <input 
                                                type="time" 
                                                value={assignments[request._id]?.assignedTime || ""} // Set the value to the assignment state
                                                onChange={(e) => handleInputChange(request._id, 'assignedTime', e.target.value)} 
                                            />
                                            <button className="btn btn-success" onClick={() => assignWorker(request._id)}>
                                                Assign 
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
