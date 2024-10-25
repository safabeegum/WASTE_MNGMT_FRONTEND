// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import AdminNav from './AdminNav';

// const RequestTable = () => {
//   const [data, setData] = useState([]);  // State to hold fetched data
//   const [loading, setLoading] = useState(true);  // To show loading status
//   const [error, setError] = useState(null);  // To capture and show any error

//   // Function to fetch data from the API
//   const fetchData = () => {
//     axios
//       .post(
//         'http://localhost:8080/requesttable',
//         {}, // Empty body since you're using POST without data
//         {
//           headers: {
//             token: sessionStorage.getItem('token'),  // Pass the token for authentication
//             'Content-Type': 'application/json',
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response.data);
//         setData(response.data);  // Set data in the state
//         setLoading(false);  // Disable loading
//       })
//       .catch((error) => {
//         console.error("API Error:", error); // Log the error
//         setError('Failed to fetch data: ' + (error.response?.data?.message || error.message)); // Set error message
//         setLoading(false);  // Disable loading
//       });
//   };

//   // Fetch the data when the component mounts
//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Render loading or error state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <AdminNav /> {/* Admin navigation component */}
//       <div className="container">
//         <div className="row">
//           <div className="col col-12">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">PICKUP ID</th>
//                   <th scope="col">USER ID</th>
//                   <th scope="col">ADDRESS</th>
//                   <th scope="col">POSTED DATE</th>
//                   <th scope="col">ACCEPT</th>
//                   <th scope="col">REJECT</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((value, index) => (
//                   <tr key={index}>
//                     <td><strong>{value.pickupId}</strong></td>
//                     <td>{value.userId}</td>
//                     <td>{value.address}</td>
//                     <td>{new Date(value.postedDate).toLocaleDateString()}</td> {/* Format the date */}
//                     {/* Accept button with link */}
//                     <td>
//                       <Link
//                         to={{
//                           pathname: `/assigntask/${value.pickupId}/${value.userId}`, // Pass pickup ID in the URL path
//                           state: {
//                             userId: value.userId,  // Passing userId in the state
//                             pickupId: value.pickupId,  // Passing pickupId
//                             address: value.address,
//                             postedDate: value.postedDate,
//                           },
//                         }}
//                         className="btn btn-success"
//                       >
//                         Accept
//                       </Link>
//                     </td>
//                     {/* Reject button (if you plan to implement it) */}
//                     <td>
//                       <button className="btn btn-danger">Reject</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RequestTable;
