import React from 'react';
import { connect } from 'react-redux';
import { fetchMatch } from '../actions/matches';

export class Match extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchMatch(this.props.match.params.id));
        console.log(this.props);
    }
    
    render() {
        // const matchById = this.props.match.id;
        // console.log('!!!', matchById);
        return (
            <div>
                {/* {this.props.match} */}
                <p>need to get specific match by id!!!</p>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    // const matchId = props.match.params.matchId;
    // const game = state[matchId];
    // return Object.assign({}, game, {
    //     match: game
    // })
    // return {
    //     match: state[matchId]
    // }
};


export default connect(mapStateToProps)(Match);