import {API_BASE_URL} from '../config';

export const FETCH_SCHEDULE_REQUEST = 'FETCH_SCHEDULE_REQUEST';
export const fetchScheduleRequest = () => ({
    type: FETCH_SCHEDULE_REQUEST
});

export const FETCH_SCHEDULE_SUCCESS = 'FETCH_SCHEDULE_SUCCESS';
export const fetchScheduleSuccess = matches => ({
    type: FETCH_SCHEDULE_SUCCESS,
    matches
});

export const FETCH_SCHEDULE_ERROR = 'FETCH_SCHEDULE_ERROR';
export const fetchScheduleError = error => ({
    type: FETCH_SCHEDULE_ERROR,
    error
});

export const fetchSchedule = () => dispatch => {
    dispatch(fetchScheduleRequest());
    fetch(`${API_BASE_URL}/api/schedule`)
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
    .then(matches => {
        dispatch(fetchScheduleSuccess(matches));
    }).catch(err => {
        dispatch(fetchScheduleError(err));
    });
};