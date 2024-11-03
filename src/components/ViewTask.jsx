import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CollectNav from './CollectNav';

const ViewTask = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.post('http://localhost:8080/viewtask',
        {},
        {
          headers: { token: sessionStorage.getItem('token'), 'Content-Type': 'application/json' },
        }
      )
      .then((response) => {
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
      <CollectNav />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col">
                {data.map((value, index) => (
                  <div key={index} className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-1">
                        <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '30px' }}>
                          <img 
                            src="https://img.freepik.com/free-vector/blue-notification-bell-with-one-notification_78370-6899.jpg" 
                            className="img-fluid rounded-start" 
                            alt="Request Illustration" 
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">
                            <small className="text-body-secondary"><strong>Pickup ID:</strong> {value.pickupId}</small><br />
                            <small className="text-body-secondary"><strong>Request ID:</strong> {value.requestId}</small><br />
                            <small className="text-body-secondary"><strong>Address:</strong> {value.address}</small><br />
                            <small className="text-body-secondary"><strong>Assigned Date:</strong> {value.assignedDate}</small><br />
                            <small className="text-body-secondary"><strong>Assigned Time:</strong> {value.assignedTime}</small><br />
                            <small className="text-body-secondary"><strong>Location:</strong> {value.latitude}, {value.longitude}</small><br />
                            <small className="text-body-secondary"><strong>Assigned Worker:</strong> {value.workerName}</small><br />
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

export default ViewTask;
