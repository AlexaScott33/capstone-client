import React from 'react';

export default function RegisterForm() {
    return (
        <div>
            <h3>Register New Users</h3>
            <form>
                <label htmlFor="first-name-input">FirstName</label>
                <input type="text" name="first-name-input"></input> <br />
                <label htmlFor="last-name-input">LastName</label>
                <input type="text" name="last-name-input"></input> <br />
                <label htmlFor="user-name-input">UserName</label>
                <input type="text" name="user-name-input"></input> <br />
                <label htmlFor="password-input">Password</label>
                <input type="text" name="password-input"></input> <br />
                <label htmlFor="verify-password-input">Verify Password</label>
                <input type="text" name="verify-password-input"></input> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}