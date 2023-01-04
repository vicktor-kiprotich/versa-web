import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";

// import thunk from "redux-thunk";
import rootReducer from "./reducers/reducers";

// const storeName = "VENN-APP";

// const saveToLocalStorage = (state) => {
//   try {
//     const stringState = JSON.stringify(state);
//     localStorage.setItem(storeName, stringState);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// const loadFromLocalStorage = () => {
//   try {
//     const stringState = localStorage.getItem(storeName);
//     if (stringState === null) return undefined;
//     return JSON.parse(stringState);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// const middleware = [thunk];

// const persistStorage = loadFromLocalStorage();

const hive = configureStore({
  reducer: rootReducer,
  // preloadedState: persistStorage,
  // devTools: composeWithDevTools(applyMiddleware(...middleware)),
});
// hive.subscribe(() => saveToLocalStorage(hive.getState()));
export default hive;
