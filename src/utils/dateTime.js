import moment from "moment";

import { DEFAULT_DATETIME_FORMAT_TO_SHOW_DATETIMES } from "../constants";

export const getNow = () => moment.utc().format();
export const getDayInPast = amount =>
  moment
    .utc()
    .subtract(amount, "days")
    .format();
export const getDayInFuture = amount =>
  moment
    .utc()
    .add(amount, "days")
    .format();

export const getDateFormatted = dateToFormat =>
  moment.utc(dateToFormat).format(DEFAULT_DATETIME_FORMAT_TO_SHOW_DATETIMES);

export const durationAsString = (start, end) => {
  /* 1d 0h 0m should be present as 24h 0m*/
  const duration = moment.duration(moment(end).diff(moment(start)));
  const is24h = duration.asHours() === 24 && duration.minutes() === 0;
  const days = duration.days() > 0 && !is24h ? `${duration.days()}d ` : "";
  const hours = is24h ? 24 : duration.hours();
  return `${days}${hours}h ${duration.minutes()}m`;
};
