import React from 'react';
import error from '../../images/error.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <div className="text-center mt-5" >
                <h1>The page you are looking for is not Found!</h1>
                <img className="error-container" src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;