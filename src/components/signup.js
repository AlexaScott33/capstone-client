import React from 'react';
import RegisterForm from './register-form';
import LoginForm from './login-form';

import './signup.css';

export default function SignUp() {
    return (
        <div>
            <RegisterForm />
            <LoginForm />
        </div>
    )
}