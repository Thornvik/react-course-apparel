import CartActionTypes from "./cart.types";
import cartReducer from "./cart.reducer";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

describe("shopReducer", () => {
  it("should return inital state", () => {
    expect(cartReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should toggle hidden with togglehidden action", () => {
    expect(
      cartReducer(INITIAL_STATE, { type: CartActionTypes.TOGGLE_CART_HIDDEN })
        .hidden
    ).toBe(false);
  });

  it("should increase quantity of matching item by 1 if addItem action with same item in payload", () => {
    const mockItem = {
      id: 1,
      quantity: 2,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.ADD_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(3);
  });

  it("should decrease quantity of matching item by 1 if removeitem action with same item in payload", () => {
    const mockItem = {
      id: 1,
      quantity: 4,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(3);
  });

  it("should remove item if clearitemfromcart action if triggerd", () => {
    const mockItem = {
      id: 1,
      quantity: 2,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem,
      }).cartItems.includes((item) => item.id === 1)
    ).toBe(false);
  });

  it("should clear cart if clearCart action is triggerd", () => {
    const mockPrevState = {
      hidden: true,
      cartItems: [
        { id: 1, quantity: 1 },
        { id: 2, quantity: 1 },
      ],
    };

    expect(
      cartReducer(mockPrevState, { type: CartActionTypes.CLEAR_CART }).cartItems
        .length
    ).toBe(0);
  });

  it("should set cart from firebase if setcartfromfirebase action is triggerd", () => {
    const mockItem = {
      id: 1,
      quantity: 2,
    };

    expect(
      cartReducer(INITIAL_STATE, {
        type: CartActionTypes.SET_CART_FROM_FIREBASE,
        payload: mockItem,
      }).cartItems
    ).toBe(mockItem);
  });
});
