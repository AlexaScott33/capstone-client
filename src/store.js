import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import matchesReducer from './reducers/matches';
import matchReducer from './reducers/match';
import commentsReducer from './reducers/comments';
import predictionReducer from './reducers/predictions';


export default createStore(
        combineReducers({
        matchesReducer,
        matchReducer,
        commentsReducer,
        predictionReducer
        }),
        //window...
        applyMiddleware(thunk)
);