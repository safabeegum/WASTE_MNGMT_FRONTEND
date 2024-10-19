import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';

const ViewRequest = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.post('http://localhost:8080/viewrequest',
        {},
        {
          headers: { token: sessionStorage.getItem('token'), 'Content-Type': 'application/json' },
        }
      )
      .then((response) => {
        console.log(response.data);
        // Ensure data is always an array
        setData(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <AdminNav />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                {data.map((value, index) => (
                  <div key={index} className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-1">
                      <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '30px' }}>
                        <img src="https://img.freepik.com/free-vector/blue-notification-bell-with-one-notification_78370-6899.jpg"
                        className="img-fluid rounded-start" alt="Request Illustration" />
                    </div>

                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                        <p className="card-text">
                            <small className="text-body-secondary">Requested By: {value.email}</small><br></br>
                            <small className="text-body-secondary">Name: {value.first_name} {value.last_name}</small><br></br>
                            <small className="text-body-secondary">Address: {value.address}</small><br></br>
                            <small className="text-body-secondary">Quantity: {value.quantity}</small><br></br>
                            <small className="text-body-secondary">Additional Note: {value.addinfo}</small><br></br>
                            <small className="text-body-secondary">Requested On: {value.postedDate}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRequest 
