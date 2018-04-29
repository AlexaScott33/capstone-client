import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { Link } from 'react-router-dom';
import { login } from '../actions/auth';
import { withRouter } from 'react-router-dom';

import './login-form.css';

export class LoginForm extends React.Component {
    render() {
        return (
            <div className="container">
                <form className="login-form" name="login"
                onSubmit={this.props.handleSubmit(values => this.props.dispatch(login(values.username, values.password))
                                                                    .then(()=>this.props.history.push('/home')))}
                >
                    <img className="login-logo" src="https://imgur.com/1S2ywJa.png" alt="Login Logo"></img>                   
                    <h3>Existing Users Login</h3>
                    <label htmlFor="username">Username</label>
                    <Field
                        className="field"
                        component={Input} 
                        type="text"
                        name="username"
                        placeholder="Your username"
                    /> <br />
                    <label htmlFor="password">Password</label>
                    <Field
                        className="field"
                        component={Input} 
                        type="password" 
                        name="password"
                        placeholder="Your password"
                    /> <br />
                    <button type="submit" id="login-button">Login</button>
                </form>
                <Link to="/signup">New to Commentators? Click to Register</Link> <br />
            </div>
        )
    }
}

export default withRouter(reduxForm({
    form: 'login',
    onSubmitFail: (error, dispatch) => {
        console.log('this is the error', error);
        dispatch(focus('login', 'username'))}
    
})(LoginForm));