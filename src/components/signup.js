import React from 'react';
import RegisterForm from './register-form';
// import LoginForm from './login-form';
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
         <Popup trigger={<button className="popup-button"> What?</button>} position="right center">
                 <div className="popup-box">
                     <h4>WPL Rugby Commentators</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna eget diam iaculis, dictum consequat orci consectetur. Proin commodo quis nibh eu aliquet. Donec vel justo tempor, iaculis dui in, molestie felis. Suspendisse varius ultricies nisi, a placerat sapien efficitur sit amet. Aenean placerat metus consequat eros tincidunt blandit. Integer non eros est. Nam posuere mattis sagittis. Curabitur consequat massa urna, id varius justo lobortis porta.</p>
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