import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import * as types from '../actions/types'
import nav from './nav'
const base = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return merge(state, {
              filter:action.filter
            });
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    base,
    nav,
    routing
});

export default rootReducer;
