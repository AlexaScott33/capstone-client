import React from 'react';
import { connect } from 'react-redux';
import { fetchSchedule } from '../actions/schedule';

export class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchSchedule());
    }
    render() {
        const matchArray = this.props.matches.map((match, index) => (
            <li key={index}>
                {match}
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