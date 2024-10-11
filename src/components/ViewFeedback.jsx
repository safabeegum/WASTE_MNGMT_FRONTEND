import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';

const ViewFeedback = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .post(
        'http://localhost:8080/viewfeedback',
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
                        <img
                          src="https://img.freepik.com/free-vector/emotional-feedback-concept-illustration_114360-17635.jpg?t=st=1728671794~exp=1728675394~hmac=02c1eaa922b1443eb44ede63b16fec9d9ee32faca946f5cb9f4ee213f1b9ddce&w=740"
                          className="img-fluid rounded-start" width="200px"
                          alt="Feedback Illustration"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{value.feedback}</h5>
                          <p className="card-text">
                            <small className="text-body-secondary">Feedback by {value.email} On {value.postedDate}</small>
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

export default ViewFeedback;
