import moment from "moment";

import { durationAsString, getDateFormatted } from "../../utils/dateTime";

export const parseRoundStages = (periods = [], actualDateTime) => {
  let lastFinalizedPeriod = -1;

  const parsedRounds = periods.map((period, index) => {
    const { startDate, endDate } = period;

    const _startDate = moment.utc(startDate);

    const isFinished = _startDate.isBefore(actualDateTime);

    if (isFinished) {
      lastFinalizedPeriod = index;
    }

    return {
      name: `Round ${index + 1}`,
      startDate,
      startDateFormatted: getDateFormatted(moment.utc(startDate)),
      endDate,
      endDateFormatted: getDateFormatted(moment.utc(endDate)),
      isFinished
    };
  });

  let durations = {
    sinceLastRound: null,
    untilNextRound: durationAsString(actualDateTime, parsedRounds[0].startDate)
  };

  if (lastFinalizedPeriod > -1) {
    durations = {
      sinceLastRound: durationAsString(
        parsedRounds[lastFinalizedPeriod].endDate,
        actualDateTime
      ),
      untilNextRound: parsedRounds[lastFinalizedPeriod + 1]
        ? durationAsString(
            actualDateTime,
            parsedRounds[lastFinalizedPeriod + 1].endDate
          )
        : null
    };
  }

  return {
    durations,
    rounds: parsedRounds
  };
};
