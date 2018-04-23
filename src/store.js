import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import matchesReducer from './reducers/matches';
import matchReducer from './reducers/match';
import commentsReducer from './reducers/comments';

export default createStore(
        combineReducers({
        matchesReducer,
        matchReducer,
        commentsReducer
        }),
        //window...
        applyMiddleware(thunk)
);