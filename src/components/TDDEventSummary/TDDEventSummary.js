import React, { Component } from "react";

import "./TDDEventSummary.scss";
import TDDEventSummaryRoundHeading from "../TDDEventSummaryRoundHeading";
import { getPeriodKey } from "./TDDEventSummary.service";
import types from "../../types/event";

class TDDEventSummary extends Component {
  static propTypes = { ...types };
  static defaultProps = {};
  static displayName = "TDDEventSummary";

  render() {
    return (
      <div className="tdd-event-summary">
        <div className="tdd-event-summary__rounds-wrapper">
          {this.props.periods.map(period => (
            <TDDEventSummaryRoundHeading key={getPeriodKey(period)} />
          ))}
        </div>
      </div>
    );
  }
}

export default TDDEventSummary;
