import React, { useState, useEffect,useContext } from 'react';
import { Navbar } from '../component/Navbar';
import { Footer } from '../component/Footer';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { CustomerContext } from './CustomerContext'; 

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'fullName',
        headerName: 'fullName',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
    {
        field: 'AccountNum',
        headerName: 'AccountNum',
        type: 'AccountNum',
        width: 180,
        headerClassName: 'AccountNum-header',
        cellClassName: 'AccountNum-cell',
    },
    {
        field: 'Balance',
        headerName: 'Balance',
        type: 'Balance',
        width: 180,
        headerClassName: 'balance-header',
        cellClassName: 'balance-cell',
    },
];

export default function Customers() {
  const { customerBalances } = useContext(CustomerContext); 
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
      try {
          const response = await axios.get('https://banking-system-backend-livid.vercel.app/api/customers');
          setCustomers(response.data); 
      } catch (error) {
          console.error('Error fetching customers:', error);
          return [];
      }
  };

  useEffect(() => {
    
      fetchCustomers();
  }, []);

  useEffect(() => {
 
    setCustomers(prevCustomers => {
      
        const updatedCustomers = prevCustomers.map(customer => {
       
            const updatedBalance = customerBalances.find(Balance => Balance.id === customer.id);
            return updatedBalance ? { ...customer, Balance: updatedBalance.balance } : customer;
        });
        return updatedCustomers;
    });
}, [customerBalances]);

  return (
      <div>
          <Navbar />
          <h1 className='font-bold text-xl mt-6 mb-4 text-center'>ALL CUSTOMERS</h1>
          <div style={{ height: 400, width: '60%' }} className='ml-56'>
              <DataGrid
                  rows={customers}
                  columns={columns}
              />
          </div>
          <Footer />
      </div>
  );
}

