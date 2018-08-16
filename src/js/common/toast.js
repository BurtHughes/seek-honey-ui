import {
  loading_toast,
  success_toast,
  error_toast,
  hide_toast
} from "../model/actions";

export const toast = (dispatch) => {
  let close = (time, call) => {
    if (typeof time === 'number') {
      setTimeout(() => {
        dispatch(hide_toast());
        if (typeof call === 'function') {
          call();
        }
      }, time);
    }
  }
  return {
    hideToast: () => {
      dispatch(hide_toast());
    },
    showToast: (flag, text, time = 1000, call) => {
      switch (flag) {
        case "loading":
          dispatch(loading_toast());
          break;
        case "success":
          dispatch(success_toast(text));
          close(time, call);
          break;
        case "error":
          dispatch(error_toast(text));
          close(time, call);
          break;
      }
    }
  }
}