import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuhtContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const value = {
        ...allContext
    }
    return (
        <AuhtContext.Provider value={value}>
            {children}
        </AuhtContext.Provider>
    );
};

export default AuthProvider;