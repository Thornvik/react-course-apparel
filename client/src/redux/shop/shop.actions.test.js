import ShopActionTypes from "./shop.types";
import {
  fetchCollectionsStart,
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
  fetchCollectionsStartAsync,
} from "./shop.actions";

describe("fetchCollectionsStart Action", () => {
  it("should create the fetchcollectionstart action", () => {
    expect(fetchCollectionsStart().type).toEqual(
      ShopActionTypes.FETCH_COLLECTIONS_START
    );
  });
});

describe("fetchCollectionsSuccess Action", () => {
  it("should ceate the fetchcollectionsuccess action", () => {
    expect(fetchCollectionsSuccess().type).toEqual(
      ShopActionTypes.FETCH_COLLECTIONS_SUCCESS
    );
  });

  it("should create the collectionsmap in the action", () => {
    const mockCollectionsMap = {
      hats: {
        id: 1,
      },
    };

    expect(fetchCollectionsSuccess(mockCollectionsMap).payload).toEqual(
      mockCollectionsMap
    );
  });
});

describe("fetchCollectionsFailure Action", () => {
  it("should create the fetchcollectionfailure action", () => {
    expect(fetchCollectionsFailure("error").type).toEqual(
      ShopActionTypes.FETCH_COLLECTIONS_FAILURE
    );
  });

  it("should put the error message as the payload in the action", () => {
    expect(fetchCollectionsFailure("error").payload).toEqual("error");
  });
});

describe("fetchCollectionsStartAsync Action", () => {
  it("should create the fetchcollectionstartasync action", () => {
    const mockAction = fetchCollectionsStartAsync();
    const mockDispatch = jest.fn();
    mockAction(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
  });
});
