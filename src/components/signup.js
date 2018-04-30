import React from 'react';
import RegisterForm from './register-form';
// import LoginForm from './login-form';
import { Link } from 'react-router-dom';

import './signup.css';

export default function SignUp() {
    return (
        <div className="signup-container">
            <RegisterForm />
            <Link to="/login">Already have an account? Click to Login</Link> <br />
        </div>
    )
}