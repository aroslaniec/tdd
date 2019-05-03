import React, { Component } from "react";

import "./TDDEventSummary.scss";

class TDDEventSummary extends Component {
  static propTypes = {};
  static defaultProps = {};
  static displayName = "TDDEventSummary";

  render() {
    return (
      <div className="tdd-event-summary">
        {this.props.periods.map(period => (
          <div className="tdd-event-summary-round-heading" />
        ))}
      </div>
    );
  }
}

export default TDDEventSummary;
