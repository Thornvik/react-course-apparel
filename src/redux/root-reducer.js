import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//the local storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persisitConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persisitConfig, rootReducer);
