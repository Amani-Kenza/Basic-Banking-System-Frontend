import React, { useState, useContext } from 'react';
import { Navbar } from '../component/Navbar';
import { Footer } from '../component/Footer';
import axios from 'axios';
import { CustomerContext } from './CustomerContext';

export default function Transactions() {
    const [amount, setAmount] = useState('');
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');

   
    const { setCustomerBalances } = useContext(CustomerContext);

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    }

    const handleSendMoney = async () => {
        if (!fromAccount || !toAccount || !amount) {
            console.error('Please fill in all fields');
            return;
        }

        alert('Money sent successfully');
        setAmount('');
        setFromAccount('');
        setToAccount('');

        try {
            const response = await axios.post('https://banking-system-backend-livid.vercel.app/api/updateCustomerBalance', {
                customerBalance: {
                    fromAccount:parseInt(fromAccount,10),
                    toAccount:parseInt(toAccount,10),
                    amount:parseInt(amount,10)
                }
            });
    
         
            setCustomerBalances(response.data.customerBalances);
            console.log(response.data.customerBalances);
            console.log('Customer balances updated successfully');
        } catch (error) {
            console.error('Error updating customer balance:', error);
        }
        
    };

    return (
        <div>
            <Navbar />
            <h1 className='font-bold text-xl mt-8 mb-4 text-center'>Transfer Money</h1>
            <div className='flex flex-col items-center p-8 gap-4'>
                <input type='text' placeholder='From account' className='border-2 p-3 w-96 rounded-lg' style={{ display: 'block' }}
                    value={fromAccount} onChange={(e) => setFromAccount(e.target.value)} />
                <input type='text' placeholder='To account' className='border-2 p-3 w-96 rounded-lg ' style={{ display: 'block' }}
                    value={toAccount} onChange={(e) => setToAccount(e.target.value)} />
                <input type='text' placeholder='Enter Amount' className='border-2 p-3 w-96 rounded-lg '
                    style={{ display: 'block' }} value={amount} onChange={handleInputChange} />
                <button className='border-2 rounded-full shadow-2xl bg-sky-500 font-bold text-white p-2 w-32 ' onClick={handleSendMoney}>Send</button>
            </div>
            <Footer />
        </div>
    );
}
