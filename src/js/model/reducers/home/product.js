const product = (state = {}, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return { ...state, productList: action.productList };
    default:
      return state;
  }
};
