import React, { createContext } from 'react';


const AuthContext = createContext(null)

const AuthProviders = () => {
    return (
        <AuthContext.Provider>
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;