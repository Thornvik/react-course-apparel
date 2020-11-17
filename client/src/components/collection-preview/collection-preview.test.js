import React from "react";
import { shallow } from "enzyme";
import { CollectionPreview } from "./collection-preview.component";

describe("collection-preview", () => {
  let wrapper;
  let mockHistory;
  let mockMatch;
  const mockRouteName = "hats";

  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };

    mockMatch = {
      path: "/shop",
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: "hats",
      items: [],
    };

    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  it("should render collection preview", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call history.push with correct string when title is clicked", () => {
    wrapper.find(".title").simulate("click");

    expect(mockHistory.push).toHaveBeenCalledWith(
      `${mockMatch.path}/${mockRouteName}`
    );
  });
});
