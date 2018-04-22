import React from 'react';

export default function LoginForm() {
    return (
        <div>
            <h3>Existing Users Login</h3>
           <form>
                <label htmlFor="user-name-input">UserName</label>
                <input type="text" name="user-name-input"></input> <br />
                <label htmlFor="password-input">Password</label>
                <input type="text" name="password-input"></input> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}