import React from 'react';
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";

import './landing-page.css';
import './signup.css';

export default function LandingPage() {
    return (
        <div>
            <header role="banner" className="background">
                <h1 className="header-landing">WPL Rugby Commentators</h1>
                <div className="description-container">
                <h4 className="description-header">Stay up to date with the most recent games played during the Women's Premier League Rugby Season with WPL Rugby Commentators.</h4>
                <p>New to Commentators? <Link to="/signup" className="link">Sign up</Link> in seconds.</p>
                <p>Existing users, <Link to="/login" className="link">Login</Link> and welcome back!</p>
                <p>Once logged in, you can view all of the matches and specific details about the match. Check out the comments section and make sure to post some comments yourself!</p>
            </div>
            </header>
           
         </div>    
    );
}