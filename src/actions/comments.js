import { API_BASE_URL } from '../config';

export const FETCH_COMMENT_REQUEST = 'FETCH_COMMENT_REQUEST';
export const fetchCommentRequest = () => ({
    type: FETCH_COMMENT_REQUEST
});

export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS';
export const fetchCommentSuccess = comments => ({
    type: FETCH_COMMENT_SUCCESS,
    comments
});

export const FETCH_COMMENT_ERROR = 'FETCH_COMMENT_ERROR';
export const fetchCommentError = error => ({
    type: FETCH_COMMENT_ERROR,
    error
});

export const fetchComment = (id) => (dispatch, getState) => {
    const authToken = getState().authReducer.authToken;
    dispatch(fetchCommentRequest());
    return fetch(`${API_BASE_URL}/api/matches/${id}/comments`, {
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(result => {
        dispatch(fetchCommentSuccess(result.comments));
    }).catch(err => {
        dispatch(fetchCommentError(err));
    });
};

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const addCommentRequest = () => ({
    type: ADD_COMMENT_REQUEST
});

export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const addCommentSuccess = comments => ({
    type: ADD_COMMENT_SUCCESS,
    comments
});

export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR';
export const addCommentError = error => ({
    type: ADD_COMMENT_ERROR,
    error
});

export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (values, id) => (dispatch, getState) => {
    const authToken = getState().authReducer.authToken;
    dispatch(addCommentRequest())
    console.log('STRINGIFIED VALUES:', JSON.stringify(values));
    const newItem = { content: values };
    return fetch(`${API_BASE_URL}/api/matches/${id}/comments`, {
        method: 'POST', 
        body: JSON.stringify(newItem),
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(result => {
        dispatch(addCommentSuccess(result.comments));
    }).catch(err => {
        dispatch(addCommentError(err));
    });
};