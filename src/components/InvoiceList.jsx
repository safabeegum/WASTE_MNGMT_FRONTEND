import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserNav from './UserNav';

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);
    const [error, setError] = useState(null);

    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/invoices', {
                    headers: {
                        "token": token,
                        "Content-Type": "application/json",
                    },
                });

                console.log("Invoices fetched:", response.data); // Log data to verify

                const sortedInvoices = response.data.sort((a, b) => {
                    const dateA = new Date(a.createdAt);
                    const dateB = new Date(b.createdAt);
                    
                    // Log dates to verify correctness
                    console.log(`a.createdAt: ${a.createdAt}, dateA: ${dateA}`);
                    console.log(`b.createdAt: ${b.createdAt}, dateB: ${dateB}`);

                    // Ensure both dates are valid
                    if (isNaN(dateA) || isNaN(dateB)) {
                        console.error('Invalid date format:', a.createdAt, b.createdAt);
                        return 0; // Do not change order if dates are invalid
                    }
                    
                    return dateB - dateA; // Sort latest first
                });

                setInvoices(sortedInvoices);
            } catch (error) {
                console.error('Error fetching invoices:', error);
                setError('Error fetching invoices');
            }
        };

        fetchInvoices();
    }, [token]);

    const formatDateTime = (dateString) => {
        const options = { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false 
        };
        return new Date(dateString).toLocaleString('en-GB', options);
    };

    return (
        <div>
            <UserNav />
            <div style={containerStyle}>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {invoices.length > 0 ? (
                    <div style={cardContainerStyle}>
                        {invoices.map((invoice) => (
                            <div key={invoice.transactionId} style={cardStyle}>
                                <h3 style={titleStyle}>Haritha Karma Sena</h3>
                                <p><strong>Transaction ID: {invoice.transactionId}</strong></p>
                                <p><strong>User ID:</strong> {invoice.userId._id}</p>
                                <p><strong>Name:</strong> {`${invoice.userId.first_name} ${invoice.userId.last_name}`}</p>
                                <p><strong>Amount:</strong> Rs.{invoice.amount}/-</p>
                                <p><strong>Month:</strong> {invoice.month}</p>
                                <p><strong>Date:</strong> {formatDateTime(invoice.date)}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No invoices found.</p>
                )}
            </div>
        </div>
    );
};

// Style for the container to center the content
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
};

// Style for the card container to align cards vertically
const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
};

// Card style for better layout and visual appeal
const cardStyle = {
    border: '1px solid #ddd',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    width: '700px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
};

// Style to display the invoice ID in full without truncation
const titleStyle = {
    marginBottom: '10px',
    wordWrap: 'break-word',
};

export default InvoiceList;
