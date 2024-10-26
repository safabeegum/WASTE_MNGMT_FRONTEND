// AdminDashboard.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';

const AdminDashboard = () => {
    const [requests, setRequests] = useState([]);
    const [workers, setWorkers] = useState([]);
    const [assignments, setAssignments] = useState({});

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get("http://localhost:8080/getRequests", {
                    headers: { "token": sessionStorage.getItem("token") },
                });
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

        try {
            const response = await axios.post(`http://localhost:8080/assigntask/${requestId}`, {
                workerId,
                assignedDate,
                assignedTime,
            }, {
                headers: { "token": sessionStorage.getItem("token") }
            });

            if (response.data.status === "Worker Assigned Successfully") {
                alert("Worker Assigned Successfully!");

                setAssignments((prevAssignments) => ({
                    ...prevAssignments,
                    [requestId]: { workerId: "", assignedDate: "", assignedTime: "" },
                }));

                setRequests((prevRequests) =>
                    prevRequests.filter((request) => request._id !== requestId)
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
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <table className="table table-bordered table-hover">
                            <thead className="table-light">
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
                                            <td>{request.userId ? `${request.userId.first_name} ${request.userId.last_name}` : "Unknown User"}</td>
                                            <td>{request.userId ? request.userId.address : "No Address Available"}</td>
                                            <td>{new Date(request.requestedDate).toLocaleString()}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <select
                                                        className="form-select"
                                                        style={{ maxWidth: '150px' }}
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
                                                        className="form-control"
                                                        style={{ maxWidth: '150px' }}
                                                        value={assignments[request._id]?.assignedDate || ""}
                                                        onChange={(e) => handleInputChange(request._id, 'assignedDate', e.target.value)} 
                                                    />

                                                    <input 
                                                        type="time" 
                                                        className="form-control"
                                                        style={{ maxWidth: '100px' }}
                                                        value={assignments[request._id]?.assignedTime || ""}
                                                        onChange={(e) => handleInputChange(request._id, 'assignedTime', e.target.value)} 
                                                    />

                                                    <button 
                                                        className="btn btn-success" 
                                                        onClick={() => assignWorker(request._id)}
                                                    >
                                                        Assign
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
