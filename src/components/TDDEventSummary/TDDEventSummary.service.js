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
