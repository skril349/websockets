import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, children }) => {
    // Check if the user is not authenticated
    if (isAuthenticated) {
        // If not authenticated, render the children components
        return children;
    } else {
        // If authenticated, redirect to the main page
        return <Navigate to="/auth" replace />;
    }
};

export default PrivateRoute;
