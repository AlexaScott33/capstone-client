import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';


export class Header extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
        console.log('Logging out user');
    }

    render() {
        return (
            <div>
                <nav>
                    <Link to="/signup">Signup</Link> <br />
                    <Link to="/signup">
                        <button onClick={() => this.logOut()}>Log out</button>
                    </Link>    
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.authReducer.currentUser !== null
});

export default connect(mapStateToProps)(Header);