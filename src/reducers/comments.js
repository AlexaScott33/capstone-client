import {
    FETCH_COMMENT_REQUEST,
    FETCH_COMMENT_SUCCESS,
    FETCH_COMMENT_ERROR,
    ADD_COMMENT_REQUEST, 
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_ERROR
} from '../actions/comments';

const initialState = {
    comments: [],
    loading: false,
    error: null
}

export default function commentsReducer(state=initialState, action) {
    if (action.type === FETCH_COMMENT_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === FETCH_COMMENT_SUCCESS) {
        return Object.assign({}, state, {
            comments: action.comments,
            loading: false,
            error: null
        });
    }
    else if (action.type === FETCH_COMMENT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    else if (action.type === ADD_COMMENT_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === ADD_COMMENT_SUCCESS) {
        console.log('this is the action:', action);
        return Object.assign({}, state, {
            comments: [...state.comments, action.comment],
            loading: false,
            error: null
        });
    }
    else if (action.type === ADD_COMMENT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
} 



