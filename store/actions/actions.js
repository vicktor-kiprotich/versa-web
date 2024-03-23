export const loginUser = (data) => (dispatch) =>
  dispatch({ data, type: "LOGIN_USER" });
export const logOut = () => (dispatch) => dispatch({ type: "LOG_OUT" });
