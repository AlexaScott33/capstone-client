import React from 'react';
import RegisterForm from './register-form';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";

import './signup.css';

export default function SignUp() {
    return (
        <div>
            <div className="signup-container">
                <RegisterForm />
                <Link to="/login">Already have an account? Click to Login</Link> <br />
            </div>
            <div className="popup-link">
            <Popup trigger={<button className="popup-button"> What?</button>} position="top center">
                    <div className="popup-box">
                        <h4>WPL Rugby Commentators</h4>
                        <p>This is an app that allows you to stay up to date with the most recent games played during the Women's Premier League Rugby Season.</p> 
                        <p>If you are a new user, please register. If you're an existing user, please log in and welcome back!</p>
                        <p></p>
                    </div>
            </Popup>
                <a href="https://github.com/AlexaScott33/capstone-client" rel="noopener noreferrer" target="_blank" className="linkStyle">
                    <img className="github-logo" src="https://imgur.com/vzk8iT1.png" alt="GitHub Logo"></img>
                    <div className="github">GitHub</div>                
                </a>
            </div>
         </div>    
    )
}