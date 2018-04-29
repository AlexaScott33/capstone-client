import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import { registerUser } from '../actions/users';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';

import './register-form.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password')

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
    }
    render() {
        return (
            <div className="container">
                {this.state.msg ? this.state.msg : ''}
                <form 
                    className="register-form" 
                    name="registration"
                    onSubmit={this.props.handleSubmit(values => {
                        this.props.dispatch(registerUser(values))
                                    .then(this.setState({ msg: 'Thank you for signing up! Please login.' }))}
                            )}>
                    <img className="register-logo" src="https://imgur.com/gha3CFr.png" alt="New User Logo"></img>                   
                    <h3>Register New User</h3> 
                    <label htmlFor="firstname">First Name</label>
                    <Field 
                        component={Input}
                        type="text" 
                        name="firstname"
                        placeholder="Your first name"
                    /> <br />
                    <label htmlFor="lastname">Last Name</label>
                    <Field 
                        component={Input} 
                        type="text" 
                        name="lastname"
                        placeholder="Your last name"
                    /> <br />
                    <label htmlFor="username">Username</label>
                    <Field 
                        component={Input} 
                        type="text"
                        name="username"
                        placeholder="Enter a username"
                        validate={[required, nonEmpty, isTrimmed]} 
                    /> <br />
                    <label htmlFor="password">Password</label>
                    <Field 
                        component={Input} 
                        type="password" 
                        name="password"
                        placeholder="Enter a password"
                        validate={[required, passwordLength, isTrimmed]}
                    /> <br />
                    <label htmlFor="verifyPassword">Confirm Password</label>
                    <Field
                        component={Input} 
                        type="password" 
                        name="verifyPassword"
                        placeholder="Re-enter in password"
                        validate={[required, nonEmpty, matchesPassword]}
                    /> <br />
                    <button type="submit" id="register-button">Register</button>
                </form>             
            </div>
        )
    }
}



export default reduxForm({
    form: 'registration'
})(RegisterForm);


