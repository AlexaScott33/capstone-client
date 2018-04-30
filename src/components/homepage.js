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
                        <a href="https://github.com/AlexaScott33/capstone-client" rel="noopener noreferrer" target="_blank">
                            <img className="github-logo" src="https://imgur.com/vzk8iT1.png" alt="GitHub Logo"></img>                   
                        </a>
                        <Popup trigger={<button className="popup-button"> What?</button>} position="right top">
                            <div className="popup-box">
                                <h4>WPL Rugby Commentators</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum urna eget diam iaculis, dictum consequat orci consectetur. Proin commodo quis nibh eu aliquet. Donec vel justo tempor, iaculis dui in, molestie felis. Suspendisse varius ultricies nisi, a placerat sapien efficitur sit amet. Aenean placerat metus consequat eros tincidunt blandit. Integer non eros est. Nam posuere mattis sagittis. Curabitur consequat massa urna, id varius justo lobortis porta.</p>
                            </div>
                        </Popup>
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




