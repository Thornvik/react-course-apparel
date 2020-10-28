export const setCurrentUser = (user) => ({
  //our user action to use in the user.reducer
  type: "SET_CURRENT_USER",
  payload: user,
});
