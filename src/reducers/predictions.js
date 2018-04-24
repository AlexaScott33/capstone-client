import {
    
    ADD_PREDICTION_REQUEST, 
    ADD_PREDICTION_SUCCESS,
    ADD_PREDICTION_ERROR
} from '../actions/predictions';

const initialState = {
    prediction: '',
    loading: false,
    error: null
}

export default function predictionReducer(state=initialState, action) {
    if (action.type === ADD_PREDICTION_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === ADD_PREDICTION_SUCCESS) {
        return Object.assign({}, state, {
            prediction: action.prediction,
            loading: false,
            error: null
        });
    }
    else if (action.type === ADD_PREDICTION_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
} 
