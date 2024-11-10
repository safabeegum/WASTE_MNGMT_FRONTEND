import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CollectNav from './CollectNav';

const ViewTasks = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = () => {
      axios
        .post(
          'http://localhost:8080/viewtask', // Ensure consistency with backend route
          {},
          {
            headers: { 
              token: sessionStorage.getItem('token'), 
              'Content-Type': 'application/json' 
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setError(null); // Clear error on successful response
        })
        .catch((error) => {
          console.log(error);
          setError("Failed to load tasks. Please try again later.");
        });
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
        <div className="container mt-4">
            <CollectNav/>
            <h3>Assigned Tasks</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <table className="table table-bordered table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Task ID</th>
                        <th>Assigned Date</th>
                        <th>Assigned Time</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="4">No tasks assigned.</td>
                        </tr>
                    ) : (
                        data.map(task => (
                            <tr key={task.pickupId}>
                                <td>{task.pickupId}</td>
                                <td>{task.assignedDate}</td>
                                <td>{task.assignedTime}</td>
                                <td>{task.address}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewTasks;
