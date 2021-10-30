import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { setError, signInUsingGoogle } = useAuth()
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
                if (result) {
                    alert("Successfully Logged in");
                }
            }).catch((error) => {

                setError(error.message);

            })
    }
    return (
        <div>
            <h1>Please Login</h1>
            <Button onClick={handleGoogleLogin} className="mt-5">
                <i className="fab fa-google me-2"></i> Sign in with Google
            </Button>
        </div>
    );
};

export default Login;