import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
const CustomerList = ({ customers, handleClick }) => {
  return (
    <div className="row">

      <h2 className='card bg-dark text-white text-center mb-3 p-3'>Customer List</h2>
      <table className="m-2 table table-striped table-hover table-bordered table-md" >
        <thead >
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id} onClick={() => handleClick(customer)}>
              <td>{customer.id}</td>
              <td>{customer.firstname}</td>
              <td>{customer.lastname}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
