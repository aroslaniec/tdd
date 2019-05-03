import React, { Component } from "react";
import classnames from "classnames";

import "./TDDEventSummaryRoundHeading.scss";
import {
  getRoundStatus,
  getRoundTitle,
  isRoundFinished
} from "./TDDEventSummaryRoundHeading.service";
import { period, round } from "../../types/event";

class TDDEventSummaryRoundHeading extends Component {
  static propTypes = {
    ...period,
    ...round
  };
  static defaultProps = {};
  static displayName = "TDDEventSummaryRoundHeading";

  render() {
    const isFinished = isRoundFinished(
      this.props.endDate,
      this.props.actualDateTime
    );

    const wrapperProps = {
      className: classnames("tdd-event-summary-round-heading", {
        "tdd-event-summary-round-heading--finished": isFinished
      })
    };

    return (
      <div {...wrapperProps}>
        <div className="tdd-event-summary-round-heading__title-wrapper">
          <div className="tdd-event-summary-round-heading__title">
            {getRoundTitle(this.props.roundNumber)}
          </div>
          {isFinished ? (
            <div className="tdd-event-summary-round-heading__icon">✔</div>
          ) : null}
        </div>
        <div className="tdd-event-summary-round-heading__status">
          {getRoundStatus(
            this.props.startDate,
            this.props.endDate,
            this.props.actualDateTime
          )}
        </div>
      </div>
    );
  }
}

export default TDDEventSummaryRoundHeading;
