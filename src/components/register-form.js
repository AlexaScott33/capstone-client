import React from 'react';
import {connect} from 'react-redux';
// import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
// import { login } from '../actions/auth';
// import Input from './input';
// import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
// const passwordLength = length({min: 10, max: 72});
// const matchesPassword = matches('password');

export class RegisterForm extends React.Component {
    onSubmit(values) {
        // console.log(values.firstname.value);
        // const {username, password, firstName, lastName} = values;
        const user = {
            firstname: values.firstname.value,
            lastname: values.lastname.value,
            username: values.username.value,
            password: values.password.value
        }
        console.log(`Registering new user with firstname: ${user.firstname}, lastname: ${user.lastname}, username: ${user.username}`);
        return this.props
            .dispatch(registerUser(user))
        //     .then(()=>this.props.dispatch(login(username, password)))
    }

    render() {
        return (
            <div>
                <h3>Register New User</h3>
                 <form onSubmit={(e) => {
                     e.preventDefault();
                     this.onSubmit(e.target);
                 }}>
                    <label htmlFor="firstname">FirstName</label>
                    <input type="text" name="firstname"></input> <br />
                    <label htmlFor="lastname">LastName</label>
                    <input type="text" name="lastname"></input> <br />
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username"></input> <br />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password"></input> <br />
                    {/* <label htmlFor="verify-password-input">Verify Password</label>
                    <input type="text" name="verifyPassword"></input> <br /> */}
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default connect()(RegisterForm);



// export default reduxForm({
//     form: 'registration'
// })(RegisterForm);


// {/* <form>
//                     <label htmlFor="firstname">FirstName</label>
//                     <Field 
//                         component={Input}
//                         type="text" 
//                         name="firstname" 
//                     /> <br />
//                     <label htmlFor="lastname">LastName</label>
//                     <Field 
//                         component={Input} 
//                         type="text" 
//                         name="lastname" 
//                     /> <br />
//                     <label htmlFor="username">UserName</label>
//                     <Field 
//                         component={Input} 
//                         type="text"
//                         name="username"
//                         validate={[required, nonEmpty, isTrimmed]} 
//                     /> <br />
//                     <label htmlFor="password">Password</label>
//                     <Field 
//                         component={Input} 
//                         type="text" 
//                         name="password"
//                         validate={[required, passwordLength, isTrimmed]}
//                     /> <br />
//                     <label htmlFor="verifyPassword">Verify Password</label>
//                     <Field 
//                         component={Input} 
//                         type="text" 
//                         name="verifyPassword"
//                         validate={[required, nonEmpty, matchesPassword]}
//                     /> <br />
//                     <button type="submit">Submit</button>
//                 </form> */}
