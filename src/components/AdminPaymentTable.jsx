import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';

const AdminPaymentTable = () => {
    const [transactions, setTransactions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/transactions', {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                console.log("API Response:", response.data); // Log the full response data

                // Check if response.data is an array
                if (Array.isArray(response.data)) {
                    setTransactions(response.data);
                } else {
                    console.error("Expected an array but received:", response.data);
                    setError("Unexpected response format");
                }
            } catch (error) {
                console.error('Error fetching transactions:', error);
                setError('Error fetching transactions');
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div>
            <AdminNav/>
            <div className="container">
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {transactions.length > 0 ? (
                    <div className="row">
                        <div className="col col-12">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">TRANSACTION ID</th>
                                        <th scope="col">USER ID</th>
                                        <th scope="col">NAME</th>
                                        <th scope="col">AMOUNT</th>
                                        <th scope="col">MONTH</th>
                                        <th scope="col">DATE OF PAYMENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction) => (
                                        <tr key={transaction.transactionId}>
                                            <td>{transaction.transactionId}</td>
                                            <td>{transaction.userId._id}</td>
                                            <td>{`${transaction.userId.first_name} ${transaction.userId.last_name}`}</td>
                                            <td>Rs. {transaction.amount}/-</td>
                                            <td>{transaction.month}</td>
                                            <td>{new Date(transaction.date).toLocaleDateString('en-GB')}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <p>No transactions found.</p>
                )}
            </div>
        </div>
    );
};

export default AdminPaymentTable;
