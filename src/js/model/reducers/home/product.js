const product = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT":
      return { ...state, productList: action.productList };
    default:
      return state;
  }
};
export default product;