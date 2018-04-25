import React from 'react';
import Signup from './signup';
import Matches from './matches';
import Match from './match';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

export default function HomePage() {
    
        return (
            <Router>
                <div>
                    <h1>WPL Rugby</h1>
                    <Switch>
                        <Redirect exact from="/" to="/signup" />
                        <Route exact path="/home" component={Matches}/>
                        <Route exact path="/signup" component={Signup}/> 
                        <Route path="/match/:id" component={Match}/> 
                    </Switch>
                </div>
            </Router>
        )
    }




