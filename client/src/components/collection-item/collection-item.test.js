import React from "react";
import { shallow } from "enzyme";
import { CollectionItem } from "./collection-item.component";
import CustomButton from "../custom-button/custom-button.component";

describe("collectionItem component", () => {
  let wrapper;
  let mockAddItem;
  const mockName = "blue hat";
  const mockPrice = "20$";
  const mockImageUrl = "www.testimage.com";

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        name: mockName,
        price: mockPrice,
        imageUrl: mockImageUrl,
      },
      addItem: mockAddItem,
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it("should render collection item component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render imageUrl as a prop on BackgroundImage", () => {
    expect(wrapper.find(".image").prop("style")).toHaveProperty(
      "backgroundImage",
      `url(${mockImageUrl})`
    );
  });

  it("should run additem when add item to cart button is clicked", () => {
    wrapper.find(CustomButton).simulate("click");

    expect(mockAddItem).toHaveBeenCalled();
  });

  it("should render name prop in name span", () => {
    expect(wrapper.find(".name").text()).toBe(mockName);
  });

  it("should render price prop in price span", () => {
    expect(wrapper.find(".price").text()).toBe(mockPrice);
  });
});
