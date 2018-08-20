const auth = (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, userInfo: action.userInfo, isLogin: true };
    case "LOG_OUT":
      return { ...state, userInfo: null, isLogin: false };
    case "UPDATE_USER":
      let userInfo = { ...state.userInfo, [action.key]: action.value };
      return { ...state, userInfo };
    default:
      return state;
  }
};

export default auth;
