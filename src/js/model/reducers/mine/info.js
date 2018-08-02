import { combineReducers } from 'redux';

export default reducers = combineReducers({
    info: (state = {}, action) => {
        switch (action.type) {
            case 'LOGIN_SUCCESS': 
                return {...state, userInfo: action.data};
            default:
                return state;
        }
    },
    loginPage: (state = {}, action) => {
        switch (action.type) {
            case 'LOGIN_LOADING':
                return {...state, loading: action.data};
            case 'LOGIN_SUCCESS':
                return {...state, err: null};
            case 'LOGIN_FAILURE':
                return {...state, err: action.data};
            default: 
                return state;
        }
    }
});