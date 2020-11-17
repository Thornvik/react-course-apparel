import directoryReducer, { INITIAL_STATE } from "./directory.reducer";

it("should return inital state", () => {
  expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
});
