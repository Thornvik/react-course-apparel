import { UserAcctionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  //if state is undefined it will fallback to the value of initial state
  switch (action.type) {
    case UserAcctionTypes.SET_CURRENT_USER: //if the action type is 'SET_CURRENT_USER' then we return a new object
      //return a new object to make the components rerender
      return {
        ...state, //everything on the state
        currentUser: action.payload, //set the current user
      };
    default:
      return state; //returns the old object / state
  }
};

export default userReducer;
