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

export const success_toast = (text = "成功") => {
  return {
    type: "SUCCESS_TOAST",
    text
  };
};

export const error_toast = (text = "错误") => {
  return {
    type: "ERROR_TOAST",
    text
  };
};

export const hide_toast = () => {
  return {
    type: "HIDE_TOAST"
  };
};
