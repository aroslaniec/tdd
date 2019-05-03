import React from "react";
import { shallow } from "enzyme";

import eventResponse from "../../fixtures/event";
import TDDEventSummaryRoundHeading from "./TDDEventSummaryRoundHeading";
import {
  getRoundStatus,
  getRoundTitle
} from "./TDDEventSummaryRoundHeading.service";
import { getDayInPast } from "../../utils/dateTime";

describe("TDDEventSummaryRoundHeading", () => {
  let MOCKED_PROPS = {};

  beforeEach(() => {
    MOCKED_PROPS = {
      ...eventResponse.periods[0],
      roundNumber: 1,
      actualDateTime: eventResponse.actualDateTime
    };
  });

  it("should have className set accordingly to naming convention", () => {
    const wrapper = shallow(<TDDEventSummaryRoundHeading {...MOCKED_PROPS} />);

    expect(wrapper.hasClass("tdd-event-summary-round-heading")).toBeTruthy();
  });

  it("should render round title", () => {
    const wrapper = shallow(<TDDEventSummaryRoundHeading {...MOCKED_PROPS} />);

    expect(wrapper.find(".tdd-event-summary-round-heading__title").text()).toBe(
      getRoundTitle(MOCKED_PROPS.roundNumber)
    );
  });

  it("should render round status", () => {
    const wrapper = shallow(<TDDEventSummaryRoundHeading {...MOCKED_PROPS} />);

    expect(
      wrapper.find(".tdd-event-summary-round-heading__status").length
    ).toBe(1);
  });

  it("should render round status when round finished", () => {
    const wrapper = shallow(<TDDEventSummaryRoundHeading {...MOCKED_PROPS} />);

    expect(
      wrapper.find(".tdd-event-summary-round-heading__status").text()
    ).toBe(
      getRoundStatus(
        MOCKED_PROPS.startDate,
        MOCKED_PROPS.endDate,
        MOCKED_PROPS.actualDateTime
      )
    );
  });

  it("should render round status when round not started yet", () => {
    const actualDateTime = getDayInPast(11);
    const wrapper = shallow(
      <TDDEventSummaryRoundHeading
        {...MOCKED_PROPS}
        actualDateTime={actualDateTime}
      />
    );

    expect(
      wrapper.find(".tdd-event-summary-round-heading__status").text()
    ).toBe(
      getRoundStatus(
        MOCKED_PROPS.startDate,
        MOCKED_PROPS.endDate,
        actualDateTime
      )
    );
  });

  it("should render round status when round is in progress", () => {
    const actualDateTime = getDayInPast(9);
    const wrapper = shallow(
      <TDDEventSummaryRoundHeading
        {...MOCKED_PROPS}
        actualDateTime={actualDateTime}
      />
    );

    expect(
      wrapper.find(".tdd-event-summary-round-heading__status").text()
    ).toBe(
      getRoundStatus(
        MOCKED_PROPS.startDate,
        MOCKED_PROPS.endDate,
        actualDateTime
      )
    );
  });

  it("should have special `className` when round finished", () => {
    const wrapper = shallow(<TDDEventSummaryRoundHeading {...MOCKED_PROPS} />);

    expect(
      wrapper.hasClass("tdd-event-summary-round-heading--finished")
    ).toBeTruthy();
  });

  it("should render icon next to title when round finished", () => {
    const wrapper = shallow(<TDDEventSummaryRoundHeading {...MOCKED_PROPS} />);

    expect(
      wrapper
        .find(".tdd-event-summary-round-heading__title-wrapper")
        .find(".tdd-event-summary-round-heading__icon").length
    ).toBe(1);
  });
});
