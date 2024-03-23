export const addItem = (data) => (dispatch) =>
  dispatch({ data, type: "LOGIN_USER" });
export const removeItem = () => (dispatch) => dispatch({ type: "LOG_OUT" });
export const updateQuantity = (data) => (dispatch) =>
  dispatch({ data, type: "LOGIN_USER" });
export const clearCart = () => (dispatch) => dispatch({ type: "LOG_OUT" });
export const loginUser = (data) => (dispatch) =>
  dispatch({ data, type: "LOGIN_USER" });
export const logOut = () => (dispatch) => dispatch({ type: "LOG_OUT" });