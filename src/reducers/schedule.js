import { 
        FETCH_SCHEDULE_REQUEST,
        FETCH_SCHEDULE_SUCCESS,
        FETCH_SCHEDULE_ERROR
} from '../actions/schedule';

const initialState = {
    matches: [], 
    loading: false,
    error: null
}

export default function scheduleReducer(state=initialState, action) {
    if (action.type === FETCH_SCHEDULE_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === FETCH_SCHEDULE_SUCCESS) {
        return Object.assign({}, state, {
            matches: action.matches,
            loading: false,
            error: null
        });
    }
    else if (action.type === FETCH_SCHEDULE_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}