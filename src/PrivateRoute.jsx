import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    
    if(loading) {
        return <div><span className="loading loading-bars loading-lg mx-auto"></span></div>
    }
    if(user) {
        return children;
    } 

    return <Navigate to="/"></Navigate>
};

export default PrivateRoute;