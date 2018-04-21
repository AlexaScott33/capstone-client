import React from 'react';
import Signup from './signup';
import Matches from './matches';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

export default function HomePage() {
    
        return (
            <Router>
                <div>
                <h1>WPL</h1>
                    <Switch>
                        <Route exact path="/" component={Matches}/>
                        <Route exact path="/signup" component={Signup}/> 
                    </Switch>
                </div>
            </Router>
        )
    }




