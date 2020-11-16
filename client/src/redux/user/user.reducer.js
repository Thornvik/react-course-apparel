import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  //if state is undefined it will fallback to the value of initial state
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state, //everything on the state
        currentUser: action.payload, //set the current user
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...StaticRange,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state; //returns the old object / state
  }
};

export default userReducer;
