import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth';
import matchesReducer from './reducers/matches';
import matchReducer from './reducers/match';
import commentsReducer from './reducers/comments';



export default createStore(
        combineReducers({
        matchesReducer,
        matchReducer,
        commentsReducer,
        authReducer,
        form: formReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
);