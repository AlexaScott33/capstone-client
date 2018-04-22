import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import matchesReducer from './reducers/matches';
import matchReducer from './reducers/match';

export default createStore(
        combineReducers({
        matchesReducer,
        matchReducer
        }),
        //window...
        applyMiddleware(thunk)
);