import { string, arrayOf, shape, oneOfType, object, number } from "prop-types";

export const actualDateTime = {
  actualDateTime: oneOfType([string, object])
};

export const round = {
  ...actualDateTime,
  roundNumber: number.isRequired
};

export const period = {
  startDate: string.isRequired,
  endDate: string.isRequired
};

const types = {
  ...actualDateTime,
  startDate: string,
  endDate: string,
  periods: arrayOf(shape(period).isRequired)
};

export default types;
