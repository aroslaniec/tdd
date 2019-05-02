import React from "react";
import { shallow } from "enzyme";

import MainContent from "./MainContent";
import TDDEventSummary from "../TDDEventSummary/TDDEventSummary";
import eventResponse from "../../fixtures/event";

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

    expect(wrapper.find(TDDEventSummary).length).toBe(1);
  });

  it("should pass `event` response as props to <TDDEventSummary />", () => {
    const wrapper = shallow(<MainContent {...MOCKED_PROPS} />);

    expect(wrapper.find(TDDEventSummary).props()).toEqual(eventResponse);
  });
});
