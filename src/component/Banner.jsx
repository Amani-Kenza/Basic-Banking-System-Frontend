
import React from 'react'

export const Banner=()=>{
  return (
    <div className='flex gap-72'>
        <div className='mt-24 ml-4'>
            <h3 className='font-bold text-xl'>Make your transactions in a safe way!</h3><br/>
            <p className='mt-4 ml-4 text-base font-bold'>At Spark Bank, we believe in simplicity and security.<br/> Whether you're managing your savings, making payments,<br/> or planning for the future, our user-friendly platform is here to make<br/> your banking experience seamless.</p>
            <button className='text-white font-bold border-2 rounded-full p-4 mt-6 bg-sky-500'>New transation</button>
            </div>
            <img src='./bankimg.svg' className='w-96 mt-12' alt="bank" ></img>
    </div>
  )
}
