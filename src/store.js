import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export default createStore(combineReducers(reducers), applyMiddleware(logger, thunk));