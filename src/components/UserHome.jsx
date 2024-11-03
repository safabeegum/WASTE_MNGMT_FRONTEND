import React, { useEffect, useState } from "react";
import UserNav from "./UserNav";
import axios from "axios";
import Notifications from "./Notifications";

const UserHome = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:8080/notifications", {
          headers: { token: sessionStorage.getItem("token") },
        });
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="container">
      <UserNav />
      <div className="row">
        {/* Waste Pickup Request Card */}
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://img.freepik.com/free-vector/list-concept-illustration_114360-1320.jpg"
                  className="img-fluid rounded-start"
                  alt="Waste Pickup"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <br></br><br></br>
                  <h5 className="card-title">WASTE PICKUP REQUEST</h5>
                  <a href="/addrequest" className="btn btn-dark">CLICK HERE</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pickup Details Card */}
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://img.freepik.com/free-vector/medium-feedback-concept-illustrated_23-2148967056.jpg"
                  className="img-fluid rounded-start"
                  alt="Pickup Details"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <br></br><br></br>
                  <h5 className="card-title">PICKUP DETAILS</h5>
                  <Notifications />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Card */}
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://img.freepik.com/free-vector/qr-code-scanning-concept-with-characters-illustrated_23-2148633631.jpg"
                  className="img-fluid rounded-start"
                  alt="Payment"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <br></br><br></br>
                  <h5 className="card-title">PAYMENT</h5>
                  <a href="/transactionform" className="btn btn-dark">CLICK HERE</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoice Card */}
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://img.freepik.com/free-vector/invoice-concept-illustration_114360-2485.jpg"
                  className="img-fluid rounded-start"
                  alt="Invoice"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <br></br><br></br>
                  <h5 className="card-title">INVOICE</h5>
                  <a href="/invoicelist" className="btn btn-dark">CLICK HERE</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Card */}
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://img.freepik.com/free-vector/medium-feedback-concept-illustrated_23-2148967056.jpg"
                  className="img-fluid rounded-start"
                  alt="Feedback"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                <br></br><br></br>
                  <h5 className="card-title">FEEDBACK</h5>
                  <a href="/userfeedback" className="btn btn-dark">CLICK HERE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
