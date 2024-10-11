import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';

const ViewCollector = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .post(
        'http://localhost:8080/viewcollector',
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
                  <th scope="col">DISTRICT</th>
                  <th scope="col">LSGI TYPE</th>
                  <th scope="col">LSGI NAME</th>
                  <th scope="col">WARD NAME</th>
                  <th scope="col">PHONE NUMBER</th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.address}</td>
                    <td>{value.district}</td>
                    <td>{value.lsgi_type}</td>
                    <td>{value.lsgi_name}</td>
                    <td>{value.ward_name}</td>
                    <td>{value.phone}</td>
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

export default ViewCollector;
