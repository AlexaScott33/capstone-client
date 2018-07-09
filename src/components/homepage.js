import React from 'react';
import LandingPage from './landing-page';
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
                    {/* <header role="banner" className="background">
                        <h1 className="header-landing">WPL Rugby Commentators</h1>
                    </header> */}
                    <main role="main" className="main">
                    <Switch>
                        <Redirect exact from="/" to="/landing" />
                        <Route exact path="/landing" component={LandingPage} />
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




