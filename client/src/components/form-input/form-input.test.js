import React from "react";
import { shallow } from "enzyme";
import { FormInput } from "./form-input.component";

describe("formInput component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      handleChange: mockHandleChange,
      label: "email",
      value: "test@gmail.com",
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it("should render forminput", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle change", () => {
    wrapper.find(".form-input").simulate("change");

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should render label if label exists", () => {
    expect(wrapper.exists(".form-input-label")).toBe(true);
  });

  it("should not render label if label is null", () => {
    const newMockProps = {
      handleChange: mockHandleChange,
      label: "",
      value: "test@gmail.com",
    };

    const newWrapper = shallow(<FormInput {...newMockProps} />);

    expect(newWrapper.exists(".form-input-label")).toBe(false);
  });
});
