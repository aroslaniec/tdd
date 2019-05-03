import moment from "moment";
import { getDateFormatted } from "../../utils/dateTime";

export const getRoundTitle = roundNumber => `Round ${roundNumber}`;

export const isRoundFinished = (endDate, actualDateTime) => {
  return moment.utc(endDate).isBefore(moment.utc(actualDateTime));
};

const isRoundNotStarted = (startDate, actualDateTime) => {
  return moment.utc(actualDateTime).isBefore(moment.utc(startDate));
};

export const getRoundStatus = (startDate, endDate, actualDateTime) => {
  if (isRoundFinished(endDate, actualDateTime)) {
    return `Finished: ${getDateFormatted(endDate)}`;
  }

  if (isRoundNotStarted(startDate, actualDateTime)) {
    return `Starts: ${getDateFormatted(startDate)}`;
  }

  return `Started: ${getDateFormatted(startDate)}`;
};
