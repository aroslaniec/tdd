import React, { Component } from "react";

import "./TDDEventSummary.scss";
import TDDEventSummaryRoundHeading from "../TDDEventSummaryRoundHeading";
import {
  getDurationFromLatestFinishedRound,
  getDurationUntilClosestNotStartedRound,
  getPeriodKey,
  parseEventForTimeLine
} from "./TDDEventSummary.service";
import types from "../../types/event";
import TimeLineWithPeriods from "../TimeLineWithPeriods";

class TDDEventSummary extends Component {
  static propTypes = { ...types };
  static defaultProps = {};
  static displayName = "TDDEventSummary";

  render() {
    const latestFinishedRoundDuration = getDurationFromLatestFinishedRound(
      this.props.periods,
      this.props.actualDateTime
    );
    const closestNotStartedRoundDuration = getDurationUntilClosestNotStartedRound(
      this.props.periods,
      this.props.actualDateTime
    );

    return (
      <div className="tdd-event-summary">
        <div className="tdd-event-summary__rounds-wrapper">
          {this.props.periods.map((period, index) => (
            <TDDEventSummaryRoundHeading
              {...period}
              roundNumber={index + 1}
              actualDateTime={this.props.actualDateTime}
              key={getPeriodKey(period)}
            />
          ))}
        </div>
        <div className="tdd-event-summary__time-line-wrapper">
          <TimeLineWithPeriods {...parseEventForTimeLine(this.props)} />
        </div>
        <div className="tdd-event-summary__current-status">
          {latestFinishedRoundDuration ? (
            <div className="tdd-event-summary__current-status-since-last">
              Since Round Ended: <strong>{latestFinishedRoundDuration}</strong>
            </div>
          ) : null}
          {closestNotStartedRoundDuration ? (
            <div className="tdd-event-summary__current-status-until-next">
              Until Next Round:{" "}
              <strong>{closestNotStartedRoundDuration}</strong>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default TDDEventSummary;
