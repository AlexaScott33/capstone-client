import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import scheduleReducer from './reducers/schedule';

export default createStore(
        scheduleReducer,
        //window...
        applyMiddleware(thunk)
);