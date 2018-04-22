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

export const FETCH_MATCH_REQUEST = 'FETCH_MATCH_REQUEST';
export const fetchMatchRequest = () => ({
    type: FETCH_MATCH_REQUEST
});

export const FETCH_MATCH_SUCCESS = 'FETCH_MATCH_SUCCESS';
export const fetchMatchSuccess = match => ({
    type: FETCH_MATCH_SUCCESS,
    match
});

export const FETCH_MATCH_ERROR = 'FETCH_MATCH_ERROR';
export const fetchMatchError = error => ({
    type: FETCH_MATCH_ERROR,
    error
});

export const fetchMatch = (id) => dispatch => {
    dispatch(fetchMatchRequest());
    fetch(`${API_BASE_URL}/api/matches/${id}`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(match => {
        console.log(dispatch(fetchMatchSuccess(match)));
    }).catch(err => {
        dispatch(fetchMatchError(err));
    });
};