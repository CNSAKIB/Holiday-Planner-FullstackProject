import React from 'react';
import { Button } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
        <div>
            <h1>Please Login</h1>
            <Button className="mt-5">
                <i className="fab fa-google me-2"></i> Sign in with Google
            </Button>
        </div>
    );
};

export default Login;