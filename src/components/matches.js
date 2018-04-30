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
                <td><Link to={`/match/${match.id}`}>Details</Link></td>
                <td>{match.date}</td>
                <td>{match.home}</td>
                <td>{match.away}</td>
                <td>{match.score}</td>
            </tr>
        ));
        return (
            <div>
                <Header />
                <main>
                    <h2>Matches</h2>
                    <main>
                        <table className="matches-table">
                                <thead>
                                        <th>Details</th>
                                        <th>Date</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                        <th>Score</th>
                                </thead>
                            <tbody>
                                {matchArray}
                            </tbody>
                        </table>
                    </main>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    matches: state.matchesReducer.matches
});


export default connect(mapStateToProps)(Matches);

