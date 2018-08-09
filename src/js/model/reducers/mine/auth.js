const auth = (state = {}, action) => {
    switch (action.type) {
        case 'LOG_IN': 
            return {userInfo: action.userInfo, isLogin: true};
        case 'LOG_OUT': 
            return {...state, userInfo: null, isLogin: false};
        default:
            return state;
    }
}

export default auth