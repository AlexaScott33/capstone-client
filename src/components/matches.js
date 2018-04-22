import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMatches } from '../actions/matches';

export class Matches extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMatches());
    }
    
    render() {
        const matchArray = this.props.matches.map((match, index) => (
            <li key={index}>
                <Link to={`/match/${match.id}`}>{match.date}</Link> {match.home} {match.away} {match.score}
            </li>
        ))
        return (
            <div>
                <Header />
                <main>
                        <ul>
                            {matchArray}
                        </ul>
                </main>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    matches: state.matches
});


export default connect(mapStateToProps)(Matches);

