import {API_BASE_URL} from '../config';

export const FETCH_MATCHES_REQUEST = 'FETCH_MATCHES_REQUEST';
export const fetchMatchesRequest = () => ({
    type: FETCH_MATCHES_REQUEST
});

export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const fetchMatchesSuccess = matches => ({
    type: FETCH_MATCHES_SUCCESS,
    matches
});

export const FETCH_MATCHES_ERROR = 'FETCH_MATCHES_ERROR';
export const fetchMatchesError = error => ({
    type: FETCH_MATCHES_ERROR,
    error
});

export const fetchMatches = () => dispatch => {
    dispatch(fetchMatchesRequest());
    fetch(`${API_BASE_URL}/api/matches`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(matches => {
        dispatch(fetchMatchesSuccess(matches));
    }).catch(err => {
        dispatch(fetchMatchesError(err));
    });
};