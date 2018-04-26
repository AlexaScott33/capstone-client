import React from 'react';
import { connect } from 'react-redux';
import { fetchComment, addComment } from '../actions/comments';

export class CommentForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchComment(this.props.id));
    }

    render() {
        const commentList = this.props.comments.map((comment, index) => (
            <li key={index}>
                {comment.userId.username} {comment.content} 
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
                this.props.dispatch(addComment(userInput, this.props.id));
            }}>
                    <label htmlFor="commentInput">Make a Comment</label>
                    <textarea name="commentInput" /> <br />
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