import React from 'react';
import {Link} from 'react-router-dom';
// import NavBar from './navbar';

export default function Header() {
    return (
        <div>
            <nav>
                <Link to="/signup">Signup</Link>
            </nav>
        </div>
    )
}