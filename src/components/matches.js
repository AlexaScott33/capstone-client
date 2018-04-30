import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMatches } from '../actions/matches';

import './matches.css';

export class Matches extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMatches());
    }
    
    render() {
        const matchArray = this.props.matches.map((match, index) => (
            <tr key={index}>
                <td>{match.date}</td>
                <td>{match.home}</td>
                <td>{match.away}</td>
                <td>{match.score}</td>
                <td><Link to={`/match/${match.id}`}>Details</Link></td>
            </tr>
        ));
        return (
            <div>
            <Header />
                    <h2>Matches of 2018</h2>
                    <div className="table-responsive">
                        <table className="matches-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                        <th>Score</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                            <tbody>
                                {matchArray}
                            </tbody>
                        </table>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    matches: state.matchesReducer.matches
});


export default connect(mapStateToProps)(Matches);

