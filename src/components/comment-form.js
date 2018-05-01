import React from 'react';
import { connect } from 'react-redux';
import { fetchComment, addComment } from '../actions/comments';

import './comment-form.css';

export class CommentForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchComment(this.props.id));
    }

    render() {
        const commentList = this.props.comments.map((comment, index) => (
            <li key={index}>
                <strong>{comment.userId.username}:</strong> <i>"{comment.content}"</i>
            </li>
        ))
        return (
            <div className="comment-box-container">
                <h3>See what people said about the match</h3>
                <ul className="comment-box">
                    {commentList}
                </ul>
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
                    </textarea>
                    <button type="submit" id="comment-button">comment</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    comments: state.commentsReducer.comments
});

export default connect(mapStateToProps)(CommentForm);