import React, { Component } from "react";
import classnames from "classnames";

import "./EventSummary.scss";
import TimeLineWithPeriods from "../TimeLineWithPeriods";
import { parseRoundStages } from "./EventSummary.service";
import types from "../../types/event";

class EventSummary extends Component {
  static propTypes = { ...types };
  static defaultProps = {};
  static displayName = "EventSummary";

  render() {
    const { actualDateTime, rangeStart, rangeEnd, periods } = this.props;

    const parsedDetails = parseRoundStages(periods, actualDateTime);

    return (
      <div className="event-summary">
        <div className="event-summary__rounds-wrapper">
          {this._getRoundDescriptions(parsedDetails.rounds)}
        </div>

        <TimeLineWithPeriods
          startDate={rangeStart}
          endDate={rangeEnd}
          actualDateTime={actualDateTime}
          periods={parsedDetails.rounds}
        />

        {this._getCurrentStatus(parsedDetails.durations)}
      </div>
    );
  }

  _getRoundDescriptions = rounds => {
    return rounds.map(round => {
      const wrapperClassName = classnames("event-summary__round-details", {
        "event-summary__round-details--finished": round.isFinished
      });

      return (
        <div className={wrapperClassName} key={round.startDate}>
          <div className="event-summary__round-details-title">
            <span>{round.name}</span>
            {round.isFinished ? <span className="icon">✔</span> : null}
          </div>
          <div className="event-summary__round-details-status">
            {round.isFinished
              ? `Finished: ${round.endDateFormatted}`
              : `Starts: ${round.startDateFormatted}`}
          </div>
        </div>
      );
    });
  };

  _getCurrentStatus = durations => {
    return (
      <div className="event-summary__current-status">
        {durations.sinceLastRound ? (
          <div className="event-summary__since-last">
            Since Round Ended: <strong>{durations.sinceLastRound}</strong>
          </div>
        ) : null}
        <div className="event-summary__until-next">
          Until Next Round: <strong>{durations.untilNextRound}</strong>
        </div>
      </div>
    );
  };
}

export default EventSummary;
