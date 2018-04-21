import { 
        FETCH_MATCHES_REQUEST,
        FETCH_MATCHES_SUCCESS,
        FETCH_MATCHES_ERROR
} from '../actions/matches';

const initialState = {
    matches: [], 
    loading: false,
    error: null
}

export default function matchesReducer(state=initialState, action) {
    if (action.type === FETCH_MATCHES_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === FETCH_MATCHES_SUCCESS) {
        return Object.assign({}, state, {
            matches: action.matches,
            loading: false,
            error: null
        });
    }
    else if (action.type === FETCH_MATCHES_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}