import React from 'react';
import CommentForm from './comment-form';
import PredictionForm from './prediction-form';

import { connect } from 'react-redux';
import { fetchMatch } from '../actions/match';

export class Match extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMatch(this.props.match.params.id));
    }
    
    render() {
        const matchDate = this.props.matchObj.date;
        const matchHomeTeam = this.props.matchObj.home;
        const matchAwayTeam = this.props.matchObj.away;
        const matchScore = this.props.matchObj.score;
        const matchComment = this.props.matchObj.comments;
        return (
            <div>
                <h3>Single Match Information</h3>
                {matchDate} {matchHomeTeam} {matchAwayTeam} {matchScore} {matchComment}
                <CommentForm />
                <PredictionForm />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    matchObj: state.matchReducer.match
});


export default connect(mapStateToProps)(Match);