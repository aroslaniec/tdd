import React from "react";
import { shallow } from "enzyme";

import MainContent from "./MainContent";

describe("MainContent", () => {
  let MOCKED_PROPS = {};

  beforeEach(() => {
    MOCKED_PROPS = {};
  });

  it("should have className set accordingly to naming convention", () => {
    const wrapper = shallow(<MainContent {...MOCKED_PROPS} />);

    expect(wrapper.hasClass("main-content")).toBeTruthy();
  });

  it("should display <TDDEventSummary />", () => {
    const wrapper = shallow(<MainContent {...MOCKED_PROPS} />);

    expect(wrapper.find(".tdd-event-summary").length).toBe(1);
  });
});
