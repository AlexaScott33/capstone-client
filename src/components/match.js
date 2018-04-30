import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentForm from './comment-form';
import { fetchMatch } from '../actions/match';
// import PredictionForm from './prediction-form';

import './match.css';

export class Match extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMatch(this.props.match.params.id));
    }
    
    render() {
        const matchDate = this.props.matchObj.date;
        const matchHomeTeam = this.props.matchObj.home;
        const matchAwayTeam = this.props.matchObj.away;
        const matchScore = this.props.matchObj.score;
        return (
            <div>
                <section className="home-link">
                    <Link to="/home">Home</Link> <br />
                </section>
                <table className="single-match-table">
                    <thead>
                        <tr>
                            <th colSpan="2">Single Match Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Date</td>
                            <td>{matchDate}</td>
                        </tr>
                        <tr>
                            <td>Home Team</td>
                            <td>{matchHomeTeam}</td>
                        </tr>
                        <tr>
                            <td>Away Team</td>
                            <td>{matchAwayTeam}</td>
                        </tr>
                        <tr>
                            <td>Final Score</td>
                            <td>{matchScore}</td>
                        </tr>
                    </tbody>
                </table>
                <CommentForm id={this.props.match.params.id} />
                {/* <PredictionForm /> */}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    matchObj: state.matchReducer.match
});


export default connect(mapStateToProps)(Match);