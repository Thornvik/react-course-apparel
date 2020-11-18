import UserActionTypes from "./user.types";
import {
  googleSignInStart,
  signInSuccess,
  signInFailure,
  emailSignInStart,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFailure,
  signUpStart,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";
import e from "express";

describe("googleSignInStart action", () => {
  it("should create the googlesignisnstart action", () => {
    expect(googleSignInStart().type).toEqual(
      UserActionTypes.GOOGLE_SIGN_IN_START
    );
  });
});

describe("emailsigninstart action", () => {
  it("should create the emailsigninstart action", () => {
    const mockEmailAndPassword = {
      email: "test@gmail.com",
      password: "test123",
    };

    const action = emailSignInStart(mockEmailAndPassword);

    expect(action.type).toEqual(UserActionTypes.EMAIL_SIGN_IN_START);
    expect(action.payload).toEqual(mockEmailAndPassword);
  });
});

describe("signinsuccess action", () => {
  it("should create the signinsuccess action", () => {
    const mockUser = {
      uid: "1234",
    };

    const action = signInSuccess(mockUser);

    expect(action.type).toEqual(UserActionTypes.SIGN_IN_SUCCESS);
    expect(action.payload).toEqual(mockUser);
  });
});

describe("signinfailure action", () => {
  it("should create the signinfailure action", () => {
    const mockError = {
      error: "error",
    };

    const action = signInFailure(mockError);

    expect(action.type).toEqual(UserActionTypes.SIGN_IN_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});

describe("checkusersession action", () => {
  it("should create the checkusersession action", () => {
    expect(checkUserSession().type).toEqual(UserActionTypes.CHECK_USER_SESSION);
  });
});

describe("signoutstart action", () => {
  it("should create the signoutstart action", () => {
    expect(signOutStart().type).toEqual(UserActionTypes.SIGN_OUT_START);
  });
});

describe("singoutsucces action", () => {
  it("should create the signoutsuccess action", () => {
    expect(signOutSuccess().type).toEqual(UserActionTypes.SIGN_OUT_SUCCESS);
  });
});

describe("signoutfailure action", () => {
  it("should create the signoutfailure action", () => {
    const mockError = {
      error: "error",
    };

    const action = signOutFailure(mockError);

    expect(action.type).toEqual(UserActionTypes.SIGN_OUT_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});

describe("signupstart action", () => {
  it("should create the signupstart action", () => {
    const mockCredentials = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    const action = signUpStart(mockCredentials);

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_START);
    expect(action.payload).toEqual(mockCredentials);
  });
});

describe("singupsuccess action", () => {
  it("should create the signupsucces action", () => {
    const mockPayload = {
      user: {
        uid: "12345",
      },
      additionalData: {
        displayname: "test",
      },
    };

    const action = signUpSuccess(mockPayload);

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_SUCCESS);
    expect(action.payload).toEqual(mockPayload);
  });
});

describe("singupfailure action", () => {
  it("should creat the signupfailure action", () => {
    const mockError = "error";

    const action = signUpFailure(mockError);

    expect(action.type).toEqual(UserActionTypes.SIGN_UP_FAILURE);
    expect(action.payload).toEqual(mockError);
  });
});
