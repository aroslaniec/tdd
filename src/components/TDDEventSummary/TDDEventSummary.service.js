import moment from "moment";
import { durationAsString } from "../../utils/dateTime";

export const getPeriodKey = period => {
  return `${period.startDate}-${period.endDate}`;
};

export const parseEventForTimeLine = eventData => {
  return {
    startDate: eventData.rangeStart,
    endDate: eventData.rangeEnd,
    actualDateTime: eventData.actualDateTime,
    periods: [...eventData.periods]
  };
};

export const getDurationFromLatestFinishedRound = (periods, actualDateTime) => {
  const reversedPeriods = [...periods].reverse();
  let latestFinishedRoundDuration = null;

  for (let period of reversedPeriods) {
    if (moment.utc(period.endDate).isBefore(moment.utc(actualDateTime))) {
      latestFinishedRoundDuration = durationAsString(
        period.endDate,
        actualDateTime
      );
      break;
    }
  }

  return latestFinishedRoundDuration;
};

export const getDurationUntilClosestNotStartedRound = (
  periods,
  actualDateTime
) => {
  let closestNotStartedRoundDuration = null;

  for (let period of periods) {
    if (moment.utc(actualDateTime).isBefore(moment.utc(period.startDate))) {
      closestNotStartedRoundDuration = durationAsString(
        actualDateTime,
        period.startDate
      );
      break;
    }
  }

  return closestNotStartedRoundDuration;
};
