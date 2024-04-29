import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date || !category) return;
    onSubmit({
      description,
      amount: parseFloat(amount),
      date,
      category
    });
    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form className="d-flex justify-content-evenly mx-auto p-2 mt-5 mb-5 bg-warning" onSubmit={handleSubmit}>
      <div>
      <label>Date:</label>
      <input  
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      </div>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
     
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="btn btn-success" type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
