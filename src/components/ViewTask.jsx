import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CollectNav from './CollectNav';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ViewTask = () => {
  const [data, setData] = useState([]);
  const [mapVisible, setMapVisible] = useState({}); // State to track map visibility for each task

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

  const toggleMapVisibility = (index) => {
    setMapVisible((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
                          {/* Button to toggle map visibility */}
                          <button 
                            className="btn btn-primary" 
                            onClick={() => toggleMapVisibility(index)}
                          >
                            {mapVisible[index] ? 'Hide Map' : 'Show Map'}
                          </button>
                          {/* Leaflet map displaying the location */}
                          {mapVisible[index] && value.latitude && value.longitude && (
                            <MapContainer center={[value.latitude, value.longitude]} zoom={13} style={{ height: "200px", width: "100%", marginTop: '10px' }}>
                              <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                              />
                              <Marker position={[value.latitude, value.longitude]}>
                                <Popup>
                                  <strong>Assigned Worker:</strong> {value.workerName}
                                </Popup>
                              </Marker>
                            </MapContainer>
                          )}
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
