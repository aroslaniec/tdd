import React, { Component } from "react";

import "./MainContent.scss";
import event from "../../fixtures/event";
import EventSummary from "../EventSummary";
import {
  getDateFormatted,
  getDayInFuture,
  getDayInPast,
  getNow
} from "../../utils/dateTime";
import TDDEventSummary from "../TDDEventSummary";

class MainContent extends Component {
  static propTypes = {};
  static defaultProps = {};
  static displayName = "MainContent";

  constructor(props) {
    super(props);

    this.state = {
      actualDateTime: event.actualDateTime
    };
  }

  render() {
    const { actualDateTime } = this.state;

    const eventSummaryProps = {
      ...event,
      actualDateTime
    };

    return (
      <div className="main-content">
        <h3>Dev Tools:</h3>
        <div className="main-content__dev-tools-wrapper">
          <div className="main-content__dev-tools">
            <div className="main-content__subtract-wrapper">
              <button onClick={() => this._subtractDaysFromActualDate(16)}>
                -16
              </button>
              <button onClick={() => this._subtractDaysFromActualDate(13)}>
                -13
              </button>
              <button onClick={() => this._subtractDaysFromActualDate(10)}>
                -10
              </button>
              <button onClick={() => this._subtractDaysFromActualDate(7)}>
                -7
              </button>
              <button onClick={() => this._subtractDaysFromActualDate(5)}>
                -5
              </button>
            </div>
            <div className="main-content__actual-date">
              {getDateFormatted(actualDateTime)}
            </div>
            <div className="main-content__add-wrapper">
              <button onClick={() => this._addDaysToActualDate(1)}>+1</button>
              <button onClick={() => this._addDaysToActualDate(5)}>+5</button>
              <button onClick={() => this._addDaysToActualDate(15)}>+15</button>
              <button onClick={() => this._addDaysToActualDate(20)}>+20</button>
              <button onClick={() => this._addDaysToActualDate(23)}>+23</button>
              <button onClick={() => this._addDaysToActualDate(30)}>+30</button>
            </div>
            <button onClick={() => this._resetToActualDate()}>RESET</button>
          </div>
        </div>
        <div className="main-content__event-summary-wrapper">
          <h3>Test-First Version:</h3>
          <TDDEventSummary {...eventSummaryProps} />
        </div>
        <div className="main-content__event-summary-wrapper">
          <h3>Code-First Version:</h3>
          <EventSummary {...eventSummaryProps} />
        </div>
      </div>
    );
  }

  _subtractDaysFromActualDate = amount => {
    this.setState({
      actualDateTime: getDayInPast(amount)
    });
  };

  _addDaysToActualDate = amount => {
    this.setState({
      actualDateTime: getDayInFuture(amount)
    });
  };

  _resetToActualDate = () => {
    this.setState({
      actualDateTime: getNow()
    });
  };
}

export default MainContent;
