import React, { useState } from 'react';
import customerdata from './customers.json'
import 'bootstrap/dist/css/bootstrap.min.css'
const CustomerForm = ({ addCustomer }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    var x = customerdata.length + 1;
    addCustomer({
      id: x, // Auto-incrementing ID
      ...formData,
    });
    customerdata.push({id:x,...formData });
    setFormData({ firstname: '', lastname: '', email: '' });
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit} className='form-group'>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className='form-control'
        /> <br></br>
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className='form-control'
        /> <br></br>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='form-control'  
        /><br></br>
        <button type="submit" className='btn btn-warning'>Add Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
