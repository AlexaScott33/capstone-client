import {  
    fetchCommentSuccess, 
    FETCH_COMMENT_SUCCESS
} from './comments';

describe('fetchCommentSuccess', () => {
    it('Should return the action', () => {
        const comments = 
        {
            "_id": "222222222222222222222200",
            "content": "Vivamus elementum mi ut ligula bibendum fringilla. Pellentesque dictum quam eu augue consequat egestas. Sed elementum sodales viverra. Morbi malesuada faucibus efficitur. ",
            "userId": "333333333333333333333300"
          };
        
            const action = fetchCommentSuccess(comments);
            expect(action).toEqual({
                type: FETCH_COMMENT_SUCCESS,
                comments
            });
    });
});