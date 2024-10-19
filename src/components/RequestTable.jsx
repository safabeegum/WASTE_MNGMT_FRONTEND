import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';

const RequestTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 

  const fetchData = () => {
    axios
      .post(
        'http://localhost:8080/requesttable',
        {},
        {
          headers: { token: sessionStorage.getItem('token'), 'Content-Type': 'application/json' },
        }
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  const handleAccept = (user) => {
    navigate('/assigntask', { state: { userDetails: user, userId: user._id } }); // Navigate with user details and user ID
  };

  return (
    <div>
      <AdminNav/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">NAME</th>
                  <th scope="col">ADDRESS</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">ADDITIONAL NOTE</th>
                  <th scope="col">POSTED DATE</th>
                  <th scope="col">ACCEPT</th>
                  <th scope="col">REJECT</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.first_name}</td>
                    <td>{value.address}</td>
                    <td>{value.email}</td>
                    <td>{value.quantity}</td>
                    <td>{value.addinfo}</td>
                    <td>{value.postedDate}</td>
                    <td><button className="btn btn-success ms-2" onClick={() => handleAccept(value)}>ACCEPT</button></td>
                    <td><button className="btn btn-danger ms-2">REJECT</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestTable
