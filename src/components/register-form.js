import React from 'react';

export default function RegisterForm() {
    return (
        <div>
            <h3>Register New Users</h3>
            <form>
                <label>FirstName</label>
                <input type="text" name="first-name-input"></input> <br />
                <label>LastName</label>
                <input type="text" name="last-name-input"></input> <br />
                <label>UserName</label>
                <input type="text" name="user-name-input"></input> <br />
                <label>Password</label>
                <input type="text" name="password-input"></input> <br />
                <label>Verify Password</label>
                <input type="text" name="verify-password-input"></input> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}