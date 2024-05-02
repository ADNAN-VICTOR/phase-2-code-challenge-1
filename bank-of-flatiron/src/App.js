import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      description: "Paycheck from Bob's Burgers",
      amount: 1000,
      date: "2024-04-29",
      category: "income"
    },
    {
      description: "Chipotle",
      amount: 40,
      date: "2024-04-28",
      category: "Food"
    },
    {
      description: "Nywele nzuri",
      amount: 10500,
      date: "2022-12-30",
      category: "Service"
    },  
    {
      description: "Moringa",
      amount: 40000,
      date: "2023-05-14",
      category: "Education"
    },  
    {
      description: "Imax",
      amount: 6600,
      date: "2024-08-28",
      category: "Entertainment"
    },
    {
      description: "Paycheck from flatdango",
      amount: 1220,
      date: "2023-06-23",
      category: "icome"
    },
    {
      description: "Light Academy",
      amount: 12300,
      date: "2023-04-12",
      category: "Education"
    },
    {
      description: "KFC",
      amount: 1600,
      date: "2024-01-12",
      category: "Food"
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  //The addTransaction function takes a transaction object as a parameter and 
  //updates the transactions state variable by spreading the existing transactions and 
  //adding the new transaction to the array.
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
//The handleSearch function takes a term parameter and 
//updates the searchTerm state variable with the entered search term.
  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  //This uses the filter method to iterate over the transactions array and checks if the lowercase description of 
  //each transaction includes the lowercase search term.
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='m-5'>
      <div id="heading" className='bg-warning'>
      <h2 >The Royal Bank Of FlatIron</h2>
      </div>
      <SearchBar onSearch={handleSearch} />
      <TransactionForm onSubmit={addTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
