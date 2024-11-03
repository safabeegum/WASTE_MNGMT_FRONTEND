// Notifications.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Notifications = () => {
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
        <div className="notifications">
            <h5>Notifications</h5>
            {notifications.length === 0 ? (
                <p>No new notifications.</p>
            ) : (
                notifications.map((notification, index) => (
                    <div key={index} className="notification">
                        <p>{notification.message}</p>
                        <small>{new Date(notification.createdAt).toLocaleString()}</small>
                    </div>
                ))
            )}
        </div>
    );
};

export default Notifications;
