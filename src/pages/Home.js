import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../redux/tableSlice';
import Table from '../components/Table';
import Form from '../components/Form';
import '../App.css';

// Dummy data for the table
const dummyData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User' },
  { id: 4, name: 'David White', email: 'david@example.com', role: 'Moderator' },
  { id: 5, name: 'Eva Green', email: 'eva@example.com', role: 'User' },
  { id: 6, name: 'Frank Ocean', email: 'frank@example.com', role: 'Admin' },
  { id: 7, name: 'Grace Hopper', email: 'grace@example.com', role: 'User' },
  { id: 8, name: 'Henry Ford', email: 'henry@example.com', role: 'Editor' },
  { id: 9, name: 'Isabel Reed', email: 'isabel@example.com', role: 'Moderator' },
  { id: 10, name: 'Jack Ryan', email: 'jack@example.com', role: 'User' }
];

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load dummy data into Redux store
    dispatch(setData(dummyData));
  }, [dispatch]);

  return (
    <div className="container">
      <h1>User Management System</h1>

      {/* Form Section */}
      <div className="form-section">
        <h2>Add New User</h2>
        <Form />
      </div>

      {/* Table Section */}
      <div className="table-section">
        <h2>User List</h2>
        <Table />
      </div>
    </div>
  );
};

export default Home;
