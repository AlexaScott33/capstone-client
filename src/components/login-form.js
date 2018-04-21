import React from 'react';

export default function LoginForm() {
    return (
        <div>
            <h3>Existing Users Login</h3>
           <form>
                <label>UserName</label>
                <input type="text" name="user-name-input"></input> <br />
                <label>Password</label>
                <input type="text" name="password-input"></input> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}