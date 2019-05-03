import React from "react";
import { shallow } from "enzyme";

import eventResponse from "../../fixtures/event";
import TDDEventSummary from "./TDDEventSummary";
import TDDEventSummaryRoundHeading from "../TDDEventSummaryRoundHeading";
import { getPeriodKey } from "./TDDEventSummary.service";

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

    expect(wrapper.find(TDDEventSummaryRoundHeading).length).toBe(
      MOCKED_PROPS.periods.length
    );
  });

  it("should pass `event.periods` response item as props to <TDDEventSummaryRoundHeading />", () => {
    const wrapper = shallow(<TDDEventSummary {...MOCKED_PROPS} />);

    wrapper.find(TDDEventSummaryRoundHeading).forEach((node, index) => {
      expect(node.props()).toEqual({
        actualDateTime: eventResponse.actualDateTime,
        roundNumber: index + 1,
        ...eventResponse.periods[index]
      });

      expect(node.key()).toBe(getPeriodKey(MOCKED_PROPS.periods[index]));
    });
  });
});
