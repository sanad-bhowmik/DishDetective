import React, { createContext, useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="spinner"></div>
    }
    if (user) {
        return children;
    }
    return (<Navigate to='/login'></Navigate>

    );
};

export default PrivateRoute;