import {createStore, applyMiddleware, combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
// import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import matchesReducer from './reducers/matches';
import matchReducer from './reducers/match';
import commentsReducer from './reducers/comments';
// import predictionReducer from './reducers/predictions';
// import {setAuthToken, refreshAuthToken} from './actions/auth';

// const authToken = loadAuthToken();
// if (authToken) {
//     const token = authToken;
//     store.dispatch(setAuthToken(token));
// }

export default createStore(
        combineReducers({
        matchesReducer,
        matchReducer,
        commentsReducer,
        authReducer,
        protectedDataReducer
        // formReducer,
        // predictionReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
);