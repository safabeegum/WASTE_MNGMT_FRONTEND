import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CollectNav from './CollectNav';

const ConfirmTask = () => {
    const [tasks, setTasks] = useState([]);

    // Fetch tasks assigned to the worker on component mount
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const workerId = "66d1a1e58cc8dd04fe2af14b"; // Replace with dynamic worker ID as needed
                const response = await axios.get(`http://localhost:8080/getWorkerTasks/${workerId}`, {
                    headers: { "token": sessionStorage.getItem("token") }
                });
                console.log(response.data); // Log data to verify response
                setTasks(response.data);  // Store the fetched tasks in state
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        fetchTasks();
    }, []);  // Empty dependency array ensures this runs only once when the component mounts

    // Handle task completion
    const handleCompleteTask = async (pickupId) => {
        try {
            // Optimistically remove the task from the table
            setTasks(tasks.filter(task => task.pickupId !== pickupId));

            // Send a POST request to move the task to CompletedTask
            const response = await axios.post(`http://localhost:8080/completeTask/${pickupId}`, {}, {
                headers: { "token": sessionStorage.getItem("token") }
            });

            if (response.data.status === "Task completed successfully") {
                // Show success alert
                window.alert("Task completed successfully!");

                // Optionally, you can show a confirmation and remove the task from the table
            } else {
                // If completion failed, re-add the task to the list
                setTasks([...tasks, { pickupId }]);
                window.alert("There was an issue completing the task.");
            }
        } catch (error) {
            console.error("Error completing task:", error);
            window.alert("An error occurred while completing the task.");
        }
    };

    return (
        <div>
            <CollectNav />
            <h2 className="text-center my-4">Confirm Tasks</h2>
            <div className="d-flex justify-content-center">
                <div className="table-responsive">
                    <table className="table table-bordered" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Pickup ID</th>
                                <th>Assigned Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.length === 0 ? (
                                <tr>
                                    <td colSpan="3" style={{ textAlign: "center" }}>No tasks assigned.</td>
                                </tr>
                            ) : (
                                tasks.map((task) => (
                                    <tr key={task.pickupId}>
                                        <td>{task.pickupId}</td>
                                        <td>{task.assignedDate}</td>
                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => handleCompleteTask(task.pickupId)}
                                            >
                                                Complete
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

export default ConfirmTask;
