import React from 'react';
// import { useLocation, useNavigate } from 'react-router';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle} = useAuth();
    // const navigate = useNavigate();
    // const location = useLocation();
    // const redirect_uri = location.state?.from || '/home';
    // const handleGoogleLogin = () => {
    //     signInUsingGoogle()
    //         .then(result => {
    //             navigate(redirect_uri)
    //         })
    // }
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;