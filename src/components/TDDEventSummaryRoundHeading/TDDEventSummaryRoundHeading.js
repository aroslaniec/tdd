import React, { Component } from "react";

import "./TDDEventSummaryRoundHeading.scss";

class TDDEventSummaryRoundHeading extends Component {
  static propTypes = {};
  static defaultProps = {};
  static displayName = "TDDEventSummary";

  render() {
    return (
      <div className="tdd-event-summary-round-heading">
        <div className="tdd-event-summary-round-heading__title">
          Round {this.props.roundNumber || "undefined"}
        </div>
      </div>
    );
  }
}

export default TDDEventSummaryRoundHeading;
