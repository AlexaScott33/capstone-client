import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import matchesReducer from './reducers/matches';

export default createStore(
        matchesReducer,
        //window...
        applyMiddleware(thunk)
);