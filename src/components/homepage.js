import React from 'react';
import Signup from './signup';
import Matches from './matches';
import Match from './match';
import LoginForm from './login-form';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Popup from "reactjs-popup";

import './homepage.css';


export default function HomePage() {
    
        return (
            <Router>
                <div>
                    <nav>
                        <Popup trigger={<button> What?</button>} position="right center">
                            <div>Insert text here</div>
                        </Popup>
                        <a href="https://github.com/AlexaScott33/capstone-client" rel="noopener noreferrer" target="_blank">
                            <img className="github-logo" src="https://imgur.com/vzk8iT1.png" alt="GitHub Logo"></img>                   
                        </a>
                    </nav>
                    <header>
                        <h1>WPL Rugby Commentators</h1>
                    </header>
                    <Switch>
                        <Redirect exact from="/" to="/signup" />
                        <Route exact path="/home" component={Matches}/>
                        <Route exact path="/signup" component={Signup}/> 
                        <Route exact path="/login" component={LoginForm}/> 
                        <Route path="/match/:id" component={Match}/> 
                    </Switch>
                </div>
            </Router>
        )
    }




