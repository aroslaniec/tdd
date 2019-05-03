import React from "react";
import { shallow } from "enzyme";

import eventResponse from "../../fixtures/event";
import TDDEventSummary from "./TDDEventSummary";
import TDDEventSummaryRoundHeading from "../TDDEventSummaryRoundHeading";
import {
  getDurationFromLatestFinishedRound,
  getDurationUntilClosestNotStartedRound,
  getPeriodKey,
  parseEventForTimeLine
} from "./TDDEventSummary.service";
import TimeLineWithPeriods from "../TimeLineWithPeriods";
import { getDayInFuture, getDayInPast } from "../../utils/dateTime";

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

  it("should render <TimeLineWithPeriods />", () => {
    const wrapper = shallow(<TDDEventSummary {...MOCKED_PROPS} />);
    const timeLineNode = wrapper.find(TimeLineWithPeriods);

    expect(timeLineNode.length).toBe(1);
    expect(timeLineNode.props()).toEqual(parseEventForTimeLine(MOCKED_PROPS));
  });

  it("should render current event status", () => {
    const wrapper = shallow(<TDDEventSummary {...MOCKED_PROPS} />);

    expect(wrapper.find(".tdd-event-summary__current-status").length).toBe(1);
  });

  it("should render current event status with latest finished round duration", () => {
    const wrapper = shallow(<TDDEventSummary {...MOCKED_PROPS} />);
    const latestFinishedRoundDurationWrapper = wrapper.find(
      ".tdd-event-summary__current-status-since-last"
    );

    expect(latestFinishedRoundDurationWrapper.length).toBe(1);
    expect(latestFinishedRoundDurationWrapper.find("strong").text()).toBe(
      getDurationFromLatestFinishedRound(
        MOCKED_PROPS.periods,
        MOCKED_PROPS.actualDateTime
      )
    );
  });

  it("should not render current event status with latest finished round duration", () => {
    const actualDateTime = getDayInPast(9);
    const wrapper = shallow(
      <TDDEventSummary {...MOCKED_PROPS} actualDateTime={actualDateTime} />
    );

    expect(
      wrapper.find(".tdd-event-summary__current-status-since-last").length
    ).toBe(0);
  });

  it("should render current event status with closest not started round duration", () => {
    const wrapper = shallow(<TDDEventSummary {...MOCKED_PROPS} />);
    const closestNotStartedRoundDurationWrapper = wrapper.find(
      ".tdd-event-summary__current-status-until-next"
    );

    expect(closestNotStartedRoundDurationWrapper.length).toBe(1);
    expect(closestNotStartedRoundDurationWrapper.find("strong").text()).toBe(
      getDurationUntilClosestNotStartedRound(
        MOCKED_PROPS.periods,
        MOCKED_PROPS.actualDateTime
      )
    );
  });

  it("should not render current event status with closest not started round duration", () => {
    const actualDateTime = getDayInFuture(30);
    const wrapper = shallow(
      <TDDEventSummary {...MOCKED_PROPS} actualDateTime={actualDateTime} />
    );

    expect(
      wrapper.find(".tdd-event-summary__current-status-until-next").length
    ).toBe(0);
  });
});
