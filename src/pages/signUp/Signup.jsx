import React from 'react';
import ExpenseTrackerLogo from '../../Assets/ExpenseTrackerLogo.jpg';
import AuthComponent from '../auth/authComponent';

const Signup = () => {
    return (
        <div className='d-flex'>
            <p>Your one way stop to track your income and expenses</p>
            <center>
                <img src={ExpenseTrackerLogo} className='homepage-logo' alt='Image Not Found' /></center>
            <p><AuthComponent /></p>
        </div>
    )
}

export default Signup;