import React from 'react';

export default function CommentForm() {
    return (
        <div>
            <h3>Comments about game</h3>
           <form>
                {/* <label htmlFor="comment-input">Comments</label> */}
                <input type="text" name="comment-input"></input> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}