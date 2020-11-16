import React from "react";
import { shallow } from "enzyme";

import { Header } from "./header.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

describe("header component", () => {
  let wrapper;
  let mockSignOutStart;
  beforeEach(() => {
    mockSignOutStart = jest.fn();

    const mockProps = {
      currentUser: {
        uid: "123",
      },
      hidden: true,
      signOutStart: mockSignOutStart,
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("current user is set", () => {
    it("should render sign out", () => {
      expect(wrapper.childAt(1).childAt(2).text()).toBe("SIGN OUT");
    });

    it("should call signoutstart on click", () => {
      wrapper.childAt(1).childAt(2).simulate("click");

      expect(mockSignOutStart).toHaveBeenCalled();
    });
  });

  describe("current user is null", () => {
    it("should render sign in", () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.childAt(1).childAt(2).text()).toBe("SIGN IN");
    });
  });

  describe("if hidden is true", () => {
    it("should not render cartDwropDown", () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe("if hidden is false", () => {
    it("should render cartdropdown", () => {
      const mockProps = {
        hidden: false,
        currentUser: null,
        signOutStart: mockSignOutStart,
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});
