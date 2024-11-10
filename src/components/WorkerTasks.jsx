import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CollectNav from './CollectNav';

const WorkerTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const workerId = "66d1a1e58cc8dd04fe2af14b"; // Static worker ID; replace as needed
                const response = await axios.get(`http://localhost:8080/getWorkerTasks/${workerId}`, {
                    headers: { "token": sessionStorage.getItem("token") }
                });
                console.log(response.data); // Log the data to check the response structure
                setTasks(response.data);  // Store the fetched tasks in the state
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        fetchTasks();
    }, []);  // Empty dependency array ensures this runs only once when the component mounts

    return (
        <div>
            <CollectNav />
            <h2 className="text-center my-4">Assigned Tasks</h2>
            <div className="d-flex justify-content-center">
                <div className="table-responsive">
                    <table className="table table-bordered" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Pickup ID</th>
                                <th>Assigned Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.length === 0 ? (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center" }}>No tasks assigned.</td>
                                </tr>
                            ) : (
                                tasks.map((task) => (
                                    <tr key={task.pickupId}>
                                        <td>{task.pickupId}</td>
                                        <td>{task.assignedDate}</td>
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

export default WorkerTasks;
