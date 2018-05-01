import React from 'react';
import Signup from './signup';
import Matches from './matches';
import Match from './match';
import LoginForm from './login-form';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './homepage.css';

export default function HomePage() {
        return (
            <Router>
                <div>
                    <header>
                        <h1>WPL Rugby Commentators</h1>
                    </header>
                    <main role="main" className="main">
                    <Switch>
                        <Redirect exact from="/" to="/signup" />
                        <Route exact path="/home" component={Matches} />
                        <Route exact path="/signup" component={Signup} /> 
                        <Route exact path="/login" component={LoginForm} /> 
                        <Route path="/match/:id" component={Match}/> 
                    </Switch>
                    </main>
                </div>
            </Router>
        )
    }




