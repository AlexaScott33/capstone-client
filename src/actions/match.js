import { API_BASE_URL } from '../config';
import { loadAuthToken } from '../local-storage';

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

export const fetchMatch = (id) => (dispatch, getState) => {
    const authToken = loadAuthToken() || getState().authReducer.authToken;
    dispatch(fetchMatchRequest());
    return fetch(`${API_BASE_URL}/api/matches/${id}`, {
        method: 'GET',
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
    .then(match => {
        dispatch(fetchMatchSuccess(match));
    }).catch(err => {
        dispatch(fetchMatchError(err));
    });
};