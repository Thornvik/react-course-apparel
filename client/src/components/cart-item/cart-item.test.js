import React from "react";
import { shallow } from "enzyme";
import { CartItem } from "./cart-item.component";

it("should render cartItem component", () => {
  const mockItem = {
    name: "brown hat",
    price: "20$",
    quantity: 1,
    imageUrl: "www.testIamge.com",
  };

  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
