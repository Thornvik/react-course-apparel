import CartActionTypes from "./cart.types";
import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart,
  clearCart,
  updateCartInFirebase,
  setCartFromFirebase,
} from "./cart.actions";

describe("togglecarthidden action", () => {
  it("should create the togglecarthidden action", () => {
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
  });
});

describe("additem action", () => {
  it("should create the additem action and use the payload correctly", () => {
    const mockItem = {
      id: 1,
    };

    const action = addItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe("removeItem action", () => {
  it("should create the removeitem action and use the payload correctly", () => {
    const mockItem = {
      id: 1,
    };

    const action = removeItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe("clearItem action", () => {
  it("should create the clearItem action and use the payload correctly", () => {
    const mockItem = {
      id: 1,
    };

    const action = clearItemFromCart(mockItem);

    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });
});

describe("clearCart action", () => {
  it("should create the Clearcart action", () => {
    expect(clearCart().type).toEqual(CartActionTypes.CLEAR_CART);
  });
});

describe("updateCartInFirebase action", () => {
  it("should create the updatecartinfirebase action", () => {
    expect(updateCartInFirebase().type).toEqual(
      CartActionTypes.UPDATE_CART_IN_FIREBASE
    );
  });
});

describe("setcartfromfirebase action", () => {
  it("should create the setcartfromfirebase action and use the payload correctly", () => {
    const mockItem = {
      id: 1,
    };

    const action = setCartFromFirebase(mockItem);

    expect(action.type).toEqual(CartActionTypes.SET_CART_FROM_FIREBASE);
    expect(action.payload).toEqual(mockItem);
  });
});
