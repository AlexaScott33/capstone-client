import React from 'react';
// import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import { withRouter } from 'react-router-dom';
import { login } from '../actions/auth';

export class LoginForm extends React.Component {
    // onSubmit(values) {
    //     const username = values.username.value;
    //     const password = values.password.value;
    //     console.log(`Logging in as user: ${username}`);
    //     return this.props
    //         .dispatch(login(username, password))
    //         .then(()=>this.props.history.push('/home'))
    // }

    render() {
        return (
            <div>
                <h3>Existing Users Login</h3>
                <form name="login"
                onSubmit={this.props.handleSubmit(values => this.props.dispatch(login(values.username, values.password))
                                                                    .then(()=>this.props.history.push('/home')))}
                >
                    <label htmlFor="username">UserName</label>
                    <Field 
                        component={Input} 
                        type="text"
                        name="username"
                        // validate={[required, nonEmpty, isTrimmed]} 
                    /> <br />
                    <label htmlFor="password">Password</label>
                    <Field 
                        component={Input} 
                        type="text" 
                        name="password"
                        // validate={[required, passwordLength, isTrimmed]}
                    /> <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(reduxForm({
    form: 'login'
})(LoginForm));

            // <div>
            //     <h3>Existing Users Login</h3>
            //     <form onSubmit={(e) => {
            //         e.preventDefault();
            //         this.onSubmit(e.target);
            //     }}>
            //         <label htmlFor="username">UserName</label>
            //         <input type="text" name="username"></input> <br />
            //         <label htmlFor="password">Password</label>
            //         <input type="text" name="password"></input> <br />
            //         <button type="submit">Login</button>
            //     </form>
            // </div>
//         )
//     }
// }

// export default withRouter(connect()(LoginForm));