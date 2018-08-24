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

export const update_user = ({ key, value }) => {
  return {
    type: "UPDATE_USER",
    key,
    value
  };
};

export const update_product = (productList) => {
  return {
    type: "UPDATE_PRODUCT",
    productList
  }
}

export const switch_tab = (tab) => {
  return {
    type: 'SWITCH_TAB',
    tab
  }
}

export const save_path = ({ tab, path }) => {
  return {
    type: 'SAVE_PATH',
    tab,
    path
  }
}