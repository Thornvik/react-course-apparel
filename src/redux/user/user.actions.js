import { UserAcctionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  //our user action to use in the user.reducer
  type: UserAcctionTypes.SET_CURRENT_USER,
  payload: user,
});
