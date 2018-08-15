export const login = userInfo => {
  return {
    type: "LOG_IN",
    userInfo
  };
};

export const logout = () => {
  return {
    type: "LOG_OUT"
  };
};

export const loading_toast = () => {
  return {
    type: "LOADING_TOAST"
  };
};

export const success_toast = () => {
  return {
    type: "SUCCESS_TOAST"
  };
};

export const error_toast = err => {
  return {
    type: "ERROR_TOAST",
    errMsg: err
  };
};

export const hide_toast = () => {
  return {
    type: "HIDE_TOAST"
  };
};
