import { getDayInFuture, getNow, getDayInPast } from "../utils/dateTime";

const response = {
  rangeStart: getDayInPast(15),
  rangeEnd: getDayInFuture(25),
  periods: [
    {
      startDate: getDayInPast(10),
      endDate: getDayInPast(7)
    },
    {
      startDate: getDayInFuture(1),
      endDate: getDayInFuture(14)
    },
    {
      startDate: getDayInFuture(16),
      endDate: getDayInFuture(21)
    }
  ],
  actualDateTime: getNow()
};

export default response;
