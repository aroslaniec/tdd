import React from "react";
import { shallow } from "enzyme";

import eventResponse from "../../fixtures/event";
import TDDEventSummary from "./TDDEventSummary";

describe("TDDEventSummary", () => {
  let MOCKED_PROPS = {};

  beforeEach(() => {
    MOCKED_PROPS = { ...eventResponse };
  });

  it("should have className set accordingly to naming convention", () => {
    const wrapper = shallow(<TDDEventSummary {...MOCKED_PROPS} />);

    expect(wrapper.hasClass("tdd-event-summary")).toBeTruthy();
  });

  it("should render <TDDEventSummaryRoundHeading /> for each round", () => {
    const wrapper = shallow(<TDDEventSummary {...MOCKED_PROPS} />);

    expect(wrapper.find(".tdd-event-summary-round-heading").length).toBe(
      MOCKED_PROPS.periods.length
    );
  });
});
