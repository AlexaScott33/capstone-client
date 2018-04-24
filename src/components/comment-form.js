import React from 'react';
import { connect } from 'react-redux';
import { fetchComment, addComment } from '../actions/comments';

export class CommentForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchComment());
        // console.log(this.props);
    }
    render() {
        const commentList = this.props.comments.map((comment, index) => (
            <li key={index}>
                {comment.content}
            </li>
        ))
        return (
            <div>
                <h3>Comments about game</h3>
                <ul>
                    {commentList}
                </ul>
            <form onSubmit={(e) => {
                e.preventDefault();
                const userInput = e.target.commentInput.value;
                e.target.commentInput.value='';
                this.props.dispatch(addComment(userInput));
            }}>
                    {/* <label htmlFor="comment-input">Comments</label> */}
                    <input type="text" name="commentInput"></input> <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    comments: state.commentsReducer.comments
});

export default connect(mapStateToProps)(CommentForm);