import React from 'react';
import { connect } from 'react-redux';
import { fetchComment, addComment } from '../actions/comments';

import './comment-form.css';

export class CommentForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchComment(this.props.id));
    }

    render() {
        let errorMessage;
        if(this.props.error !==null) {
            errorMessage = this.props.error.message;
        }

        const commentList = this.props.comments.map((comment, index) => (
            <li key={index}>
                <strong>{comment.userId.username}:</strong> <i>"{comment.content}"</i>
            </li>
        ))
        return (
            <div className="comment-box-container">
                <h3>See what people are saying about the match:</h3>
                <ul className="comment-box">
                    {commentList}
                </ul>
                <p className="error-message">{errorMessage}</p>
            <form className="comment-box-form" onSubmit={(e) => {
                e.preventDefault();
                const userInput = e.target.commentInput.value;
                e.target.commentInput.value='';
                this.props.dispatch(addComment(userInput, this.props.id));
            }}>
                    <textarea 
                        name="commentInput" 
                        placeholder="Leave a comment..."
                        onFocus={(e) => e.target.placeholder = ""}
                        onBlur={(e) => e.target.placeholder ="Leave a comment..."}>
                    </textarea> <br />
                    <button type="submit" id="comment-button">comment</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    comments: state.commentsReducer.comments,
    error: state.commentsReducer.error
});

export default connect(mapStateToProps)(CommentForm);