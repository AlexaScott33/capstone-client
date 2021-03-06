import React from 'react';
import RegisterForm from './register-form';
import { Link } from 'react-router-dom';
// import Popup from "reactjs-popup";

import './signup.css';

export default function SignUp() {
    return (
        <div>
            <div className="signup-container">
                <RegisterForm />
                <Link to="/login">Already have an account? Click to Login</Link> <br />
            </div>
            <div className="popup-link">
            {/* <Popup trigger={<button className="popup-button"> What?</button>} position="top center">
                    <div className="popup-box">
                        <h4>WPL Rugby Commentators</h4>
                        <p>This is an app that allows you to stay up to date with the most recent games played during the Women's Premier League Rugby Season.</p> 
                        <p>If you are a new user, please register. If you are an existing user, please log in and welcome back!</p>
                        <p>Once logged in, you can view all of the matches and specific details about the match. Check out the comments section and make sure to post some comments yourself!</p>
                    </div>
            </Popup> */}
            </div>
         </div>    
    )
}