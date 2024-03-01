import React from 'react';

const CustomerDetails = ({ customer }) => {
  return (
    <div>
      <h2>Customer Details</h2>
      {customer && (
        <div className='card'>
          <p className='card-header'>ID: {customer.id}</p>
          <p className='card-header'>First Name: {customer.firstname}</p>
          <p className='card-header'>Last Name: {customer.lastname}</p>
          <p className='card-header'>Email: {customer.email}</p>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
