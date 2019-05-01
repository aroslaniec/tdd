import React from "react";
import { shallow } from "enzyme";

import Logo from "./Logo";

describe("Logo", () => {
  let MOCKED_PROPS = {};

  beforeEach(() => {
    MOCKED_PROPS = {
      pathToSrc: "./lorem-ipsum.png"
    };
  });

  it("should render correctly", () => {
    const wrapper = shallow(<Logo {...MOCKED_PROPS} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should have className set accordingly to naming convention", () => {
    const wrapper = shallow(<Logo {...MOCKED_PROPS} />);

    expect(wrapper.hasClass("logo")).toBeTruthy();
  });
});
