// // ViewTasks.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const ViewTasks = () => {
//     const [tasks, setTasks] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchTasks = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8080/getAssignedTasks", {
//                     headers: { "token": sessionStorage.getItem("token") },
//                 });
//                 setTasks(response.data);
//             } catch (error) {
//                 console.error("Error fetching tasks:", error);
//             }
//         };
        
//         fetchTasks();
//     }, []);

//     const handleViewMap = (latitude, longitude) => {
//         navigate(`/map?lat=${latitude}&lng=${longitude}`);
//     };

//     return (
//         <div className="container mt-4">
//             <h3>Assigned Tasks</h3>
//             <table className="table table-bordered table-hover">
//                 <thead className="table-light">
//                     <tr>
//                         <th>Task ID</th>
//                         <th>Assigned Date</th>
//                         <th>Assigned Time</th>
//                         <th>Location</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tasks.length === 0 ? (
//                         <tr>
//                             <td colSpan="5">No tasks assigned.</td>
//                         </tr>
//                     ) : (
//                         tasks.map(task => (
//                             <tr key={task._id}>
//                                 <td>{task._id}</td>
//                                 <td>{task.assignedDate}</td>
//                                 <td>{task.assignedTime}</td>
//                                 <td>{task.location}</td>
//                                 <td>
//                                     <button 
//                                         className="btn btn-primary"
//                                         onClick={() => handleViewMap(task.latitude, task.longitude)}
//                                     >
//                                         View Map
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ViewTasks;
