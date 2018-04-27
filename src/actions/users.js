import { API_BASE_URL } from '../config';

import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from './utils';

// export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
// export const registerNewUser = (user) => ({
//     type:'REGISTER_NEW_USER',
//     newUser: user
// });

// export const REGISTER_NEW_USER_SUCCESS = 'REGISTER_NEW_USER_SUCCESS'
// export const registerNewUserSuccess = () => ({
//     type:'CREATE_NEW_USER_SUCCESS'
// });


// export const REGISTER_NEW_USER_ERROR= 'REGISTER_NEW_USER_ERROR'
// export const registerNewUserError = () => dispatch => ({
//     type:'REGISTER_NEW_USER_ERROR',
// });

export const registerUser = (user) => dispatch => {
    return fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => {
            console.log(res);
            res.json();
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};