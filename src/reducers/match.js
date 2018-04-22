import { 
    FETCH_MATCH_REQUEST,
    FETCH_MATCH_SUCCESS,
    FETCH_MATCH_ERROR
} from '../actions/match';

const initialState = {
match: {}, 
loading: false,
error: null
}


export default function matchReducer(state=initialState, action) {
    if (action.type === FETCH_MATCH_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === FETCH_MATCH_SUCCESS) {
        return Object.assign({}, state, {
            match: action.match,
            loading: false,
            error: null
        });
    }
    else if (action.type === FETCH_MATCH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}