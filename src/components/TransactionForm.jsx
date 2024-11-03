import React, { useState } from 'react';
import axios from 'axios';
import UserNav from './UserNav';

const TransactionForm = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [month, setMonth] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const token = sessionStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!amount || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        if (!month) {
            alert('Please select a month.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/transactions', {
                amount,
                description,
                month,
            }, {
                headers: {
                    "token": token,
                    "Content-Type": "application/json",
                },
            });

            console.log('Transaction Created:', response.data);
            setSuccess('Transaction created successfully!');
            setAmount('');
            setDescription('');
            setMonth('');
            setError(null);
            alert('Transaction created successfully!');
        } catch (error) {
            console.error('Error creating transaction:', error);
            const errorMessage = error.response ? error.response.data : error.message;
            setError(`Error: ${errorMessage}`);
        }
    };

    return (
        <div>
            <UserNav />
            <div className="container mt-4">
                <div className="card border-light p-4">
                    <h4 className="text-center mb-4">Create Transaction</h4>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Amount:</label>
                            <input
                                type="number"
                                className="form-control"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description:</label>
                            <textarea
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Month:</label>
                            <select
                                className="form-select"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select a month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success w-100">Create Transaction</button>
                    </form>
                    {success && <div className="alert alert-success mt-3">{success}</div>}
                </div>
            </div>
        </div>
    );
};

export default TransactionForm;
