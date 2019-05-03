import React from "react";
import { shallow } from "enzyme";

import eventResponse from "../../fixtures/event";
import TDDEventSummaryRoundHeading from "./TDDEventSummaryRoundHeading";

describe("TDDEventSummaryRoundHeading", () => {
  let MOCKED_PROPS = {};

  beforeEach(() => {
    MOCKED_PROPS = { ...eventResponse };
  });

  it("should have className set accordingly to naming convention", () => {
    const wrapper = shallow(<TDDEventSummaryRoundHeading {...MOCKED_PROPS} />);

    expect(wrapper.hasClass("tdd-event-summary-round-heading")).toBeTruthy();
  });
});
