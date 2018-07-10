import React from 'react';
import { Link } from 'react-router-dom';


import './landing-page.css';
import './signup.css';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: 'landing'
        }
    }

    handleClick() {
        this.setState({
            toggle: 'what?'
        });
    }

    handleClose() {
        this.setState({
            toggle: 'landing'
        });
    }
    render() {
        console.log(this.state.toggle);
        if(this.state.toggle === 'landing') {
            return (
                <div>
                    <header role="banner" className="background">
                    <div className="top-container">
                        <button 
                        className="landing-button"
                        onClick={() => this.handleClick()}
                        >What?</button>
                        <Link to="/signup" id="link">Sign up</Link>
                        <Link to="/login" id="link">Login</Link>
                    </div>
                        <h1 className="header-landing">WPL Rugby Commentators</h1>
                        {/* <div className="description-container">
                        <h4 className="description-header">Stay up to date with the most recent games played during the Women's Premier League Rugby Season with WPL Rugby Commentators.</h4>
                        <p>Once logged in, you can view all of the matches and specific details about the match. Check out the comments section and make sure to post some comments yourself!</p>
                    </div> */}
                    </header>
                 </div>    
            );
        }
        if(this.state.toggle === 'what?') {
            return (
                <div>
                    <header role="banner" className="toggle-background">
                    <div className="description-container">
                        <h4 className="description-header">Stay up to date with the most recent games played during the Women's Premier League Rugby Season with WPL Rugby Commentators.</h4>
                        <p>Once logged in, you can view all of the matches and specific details about the match. Check out the comments section and make sure to post some comments yourself!</p>
                        <button
                    onClick={() => this.handleClose()}
                    >Close</button>
                    </div>
                    
                       
                    </header>
                    
                </div>
            );
        }
    }
}