import React, { Component } from "react";
import moment from "moment";
import "./TimeLineWithPeriods.scss";
import { getBarStyles } from "./TimeLineWithPeriods.service";
import types from "../../types/event";

class TimeLineWithPeriods extends Component {
  static propTypes = { ...types };
  static defaultProps = {
    actualDateTime: moment(),
    periods: []
  };
  static displayName = "TimeLineWithPeriods";

  render() {
    const periodsWithCoordinates = getBarStyles(
      this.props.periods,
      this.props.actualDateTime,
      this.props.startDate,
      this.props.endDate
    );

    return (
      <div className="bar-with-time-periods">
        <div className="bar-with-time-periods__wrapper">
          {this._getPeriodBars(periodsWithCoordinates.periodBars)}
          {this._getBar(
            periodsWithCoordinates.currentTimeBar,
            "bar-with-time-periods__time-till-end-bar"
          )}
        </div>
      </div>
    );
  }

  _getPeriodBars = periods => {
    return periods.map(period =>
      this._getBar(period, "bar-with-time-periods__period-bar")
    );
  };

  _getBar = (period, className) => {
    const barProps = {
      key: period.key || null,
      className,
      style: {
        left: `${period.left}%`,
        width: `${period.width}%`
      }
    };

    return <div {...barProps} />;
  };
}

export default TimeLineWithPeriods;
