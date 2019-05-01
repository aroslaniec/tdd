import moment from "moment";

export const getBarStyles = (periods, actualDateTime, rangeStart, rangeEnd) => {
  const periodsAsDurations = getPeriodsAsDurations(
    periods,
    actualDateTime,
    rangeStart,
    rangeEnd
  );
  const {
    periodsDurations,
    currentTimeStart,
    durationLength
  } = periodsAsDurations;

  return {
    periodBars: getPeriodsCoordinatesAsPercentage(
      periodsDurations,
      durationLength
    ),
    currentTimeBar: getCurrentTimeBar(currentTimeStart, durationLength)
  };
};

const getCurrentTimeBar = (currentTimeStart, durationLength) => {
  if (currentTimeStart > durationLength) {
    return {
      left: 101,
      width: 0
    };
  }

  const timeTillEndStartPosition = currentTimeStart > 0 ? currentTimeStart : 0;

  return {
    left: getPercentRate(timeTillEndStartPosition, durationLength),
    width: getPercentRate(
      durationLength - timeTillEndStartPosition,
      durationLength
    )
  };
};

const getPeriodsCoordinatesAsPercentage = (
  periodsAsDurations,
  durationLength
) => {
  return periodsAsDurations.map(period => ({
    left: getPercentRate(period.startFromMinStartDate, durationLength),
    width: getPercentRate(
      period.endFromMinStartDate - period.startFromMinStartDate,
      durationLength
    ),
    key: `${period.startFromMinStartDate}-${period.endFromMinStartDate}`
  }));
};

const getPercentRate = (partialValue, totalValue) => {
  return (100 * partialValue) / totalValue;
};

const getPeriodsAsDurations = (
  periods,
  actualDateTime,
  rangeStart,
  rangeEnd
) => {
  let minStartDate = rangeStart ? moment(rangeStart).unix() : 0;
  let maxEndDate = rangeEnd ? moment(rangeEnd).unix() : 0;

  const periodsAsTimestamps = periods.map(period => {
    const startDateTimestamp = moment(period.startDate).unix();
    const endDateTimestamp = moment(period.endDate).unix();

    if (startDateTimestamp < minStartDate || !minStartDate) {
      minStartDate = startDateTimestamp;
    }

    if (endDateTimestamp > maxEndDate) {
      maxEndDate = endDateTimestamp;
    }

    return {
      startDateTimestamp,
      endDateTimestamp
    };
  });

  const periodsFromMinStartDate = periodsAsTimestamps.map(period => {
    return {
      startFromMinStartDate: period.startDateTimestamp - minStartDate,
      endFromMinStartDate: period.endDateTimestamp - minStartDate
    };
  });

  const durationLength = maxEndDate - minStartDate;

  return {
    periodsDurations: periodsFromMinStartDate,
    currentTimeStart: moment(actualDateTime).unix() - minStartDate,
    durationLength
  };
};
