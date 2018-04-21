import React from 'react';
import { connect } from 'react-redux';
import { fetchMatches } from '../actions/matches';

export class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMatches());
    }
    render() {
        const matchArray = this.props.matches.map((match, index) => (
            <li key={index}>
                {match.date} {match.home} {match.away} {match.score}
            </li>
        ))
        return (
          <div>
            <ul>
                {matchArray}
            </ul>
          </div>  
        )
    }
}

const mapStateToProps = (state) => ({
    matches: state.matches
});


export default connect(mapStateToProps)(HomePage);