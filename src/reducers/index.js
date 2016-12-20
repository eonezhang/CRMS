import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import nav from './nav'
import data from './data'
import member from './member'

const base = (state = {
    ajax: 'http://stest.udianhuo.com/crms/api'
}, action) => {
    switch (action.type) {
        case 'POSTS_REQUEST':
            return Object.assign({}, state, {
              sending: true
            });
        case 'POSTS_SUCCESS':
        case 'POSTS_FAILURE':
            return Object.assign({}, state, {
                sending: false
            });
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    base,
    nav,
    data,
    member,
    routing
});

export default rootReducer;
