const initialState = {
    cart: [],
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_USER":
        return {
          ...state,
          cart: action.data,
        };
      case "LOG_OUT":
        return {
          ...state,
          cart: {},
        };
  
      default:
        return state;
    }
  };
  