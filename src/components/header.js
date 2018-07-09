import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import './header.css';

export class Header extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <div className="logout-container">
                <Link to="/landing">
                    <button className="logout-button" onClick={() => this.logOut()}>Log out</button>
                </Link> 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(Header);