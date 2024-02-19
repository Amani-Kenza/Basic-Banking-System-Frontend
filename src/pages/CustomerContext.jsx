import React, { createContext, useState } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const [customerBalances, setCustomerBalances] = useState([]);

    return (
        <CustomerContext.Provider value={{ customerBalances, setCustomerBalances }}>
            {children}
        </CustomerContext.Provider>
    );
};
