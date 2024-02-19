import React from 'react'
import { Link } from 'react-router-dom';

export const  Navbar=()=>{
  return (
    <div className='flex shadow-2xl p-2'>
        <img src='./bank.jpg' className='w-12 h-12 mt-2 ml-4' alt="bank"></img>
        <nav className='flex'>
            <ul className='flex ml-96 gap-32 text-lg cursor-pointer'>
              <Link to='/'><li className='mt-4 hover:text-sky-400'>HOME</li></Link>
              <li className='mt-4 hover:text-sky-400'>ABOUT</li>
              <Link to='/Customers'><li className='mt-4 hover:text-sky-400'>ALL CUSTOMERS</li></Link>
              <Link to='/Transactions'><li className='mt-4 hover:text-sky-400'>TRANSACTIONS</li></Link>
            </ul>
        </nav>
    </div>
  )
}
