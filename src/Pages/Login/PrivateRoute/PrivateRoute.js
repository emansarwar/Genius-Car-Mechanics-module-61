import React from 'react';
import { Spinner } from 'react-bootstrap';

import { Navigate, useLocation } from 'react-router';
import useAuth from './../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    let auth = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    if (user.email){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
    
    // return (
    //     <Route
    //         {...rest}
    //         render={({ location }) => user.email ? children : <Redirect
    //             to={{
    //                 pathname: "/login",
    //                 state: { from: location }
    //             }}
    //         />

    //         }
    //     />
    // );
};

export default PrivateRoute;