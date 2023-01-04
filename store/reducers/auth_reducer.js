const initialState = {
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};
