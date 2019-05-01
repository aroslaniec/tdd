import { string, arrayOf, shape, oneOfType, object } from "prop-types";

const types = {
  actualDateTime: oneOfType([string, object]),
  startDate: string,
  endDate: string,
  periods: arrayOf(
    shape({
      startDate: string.isRequired,
      endDate: string.isRequired
    }).isRequired
  )
};

export default types;
