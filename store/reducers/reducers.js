import { combineReducers } from "redux";
import { authReducer } from "./auth_reducer";
import { cartReducer } from "./cart_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // cart: cartReducer,
});

export default rootReducer;
