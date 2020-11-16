import React from "react";
import { shallow } from "enzyme";
import { MenuItem } from "./menu-item.component";

describe("menuItem Component", () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = "/hats";
  const size = "large";
  const imageUrl = "testimage";

  beforeEach(() => {
    mockMatch = {
      url: "/shop",
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      title: "hats",
      imageUrl,
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it("should render menu-item component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push with correct string when menu-item is clicked", () => {
    wrapper.simulate("click");

    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
  });

  it("should Pass size to menu-item as class name", () => {
    expect(wrapper.prop("className")).toBe(`${size} menu-item`);
  });

  it("should pass the imageurl to Background image div", () => {
    expect(wrapper.find(".background-image").prop("style")).toHaveProperty(
      "backgroundImage",
      `url(${imageUrl})`
    );
  });
});
