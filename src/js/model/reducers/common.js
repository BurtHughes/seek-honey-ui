const toast = (state = {}, action) => {
  switch (action.type) {
    case "LOADING_TOAST":
      return {
        ...state,
        toast: { show: true, text: "加载中...", icon: "loading" }
      };
    case "SUCCESS_TOAST":
      return {
        ...state,
        toast: { show: true, text: action.text, icon: "success-no-circle" }
      };
    case "ERROR_TOAST":
      return {
        ...state,
        toast: { show: true, text: action.text, icon: "warn" }
      };
    case "HIDE_TOAST":
      return {
        ...state,
        toast: { show: false, text: "", icon: "" }
      };
    default:
      return {
        ...state,
        toast: { show: false, text: "", icon: "" }
      };
  }
};
export default toast;
