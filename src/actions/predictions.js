import {API_BASE_URL} from '../config';

export const ADD_PREDICTION_REQUEST = 'ADD_PREDICTION_REQUEST';
export const addPredictionRequest = () => ({
    type: ADD_PREDICTION_REQUEST
});

export const ADD_PREDICTION_SUCCESS = 'ADD_PREDICTION_SUCCESS';
export const addPredictionSuccess = prediction => ({
    type: ADD_PREDICTION_SUCCESS,
    prediction
});

export const ADD_PREDICTION_ERROR = 'ADD_PREDICTION_ERROR';
export const addPredictionError = error => ({
    type: ADD_PREDICTION_ERROR,
    error
});

export const ADD_PREDICTION = 'ADD_PREDICTION';
export const addPrediction = (values) => dispatch => {
    dispatch(addPredictionRequest())
    console.log('STRINGIFIED VALUES:', JSON.stringify(values));
    const newItem = { content: values };
    fetch(`${API_BASE_URL}/api/predictions`, {
        method: 'POST', 
        body: JSON.stringify(newItem),
        headers: {
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
    .then(prediction => {
        dispatch(addPredictionSuccess(prediction));
    }).catch(err => {
        dispatch(addPredictionError(err));
    });
};