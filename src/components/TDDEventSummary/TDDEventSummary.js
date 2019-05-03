import React, { Component } from "react";

import "./TDDEventSummary.scss";
import TDDEventSummaryRoundHeading from "../TDDEventSummaryRoundHeading";
import { getPeriodKey, parseEventForTimeLine } from "./TDDEventSummary.service";
import types from "../../types/event";
import TimeLineWithPeriods from "../TimeLineWithPeriods";

class TDDEventSummary extends Component {
  static propTypes = { ...types };
  static defaultProps = {};
  static displayName = "TDDEventSummary";

  render() {
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
      </div>
    );
  }
}

export default TDDEventSummary;
