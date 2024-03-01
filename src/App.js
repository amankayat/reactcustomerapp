import React, { useState } from 'react';
import CustomerDetails from './components/CustomerDetails';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import custmerdata from './components/customers.json';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [customers, setCustomers] = useState(custmerdata);

  const addCustomer = customer => {
    setCustomers([...customers, customer]);
  };

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleRowClick = customer => {
    setSelectedCustomer(customer);
  };

  return (
    <div>
      <div>
      <CustomerList customers={customers} handleClick={handleRowClick} />
      </div>
      <div className='row'>
        <div className='col-6'>
        <CustomerForm addCustomer={addCustomer} />
        </div>
        <div className='col-6 text-center'>
        <CustomerDetails customer={selectedCustomer} />
          </div>
      </div>
    
      
     
    </div>
  );
}

export default App;
