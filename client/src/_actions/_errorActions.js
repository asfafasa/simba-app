import { GET_ERRORS, CLEAR_ERRORS } from "./types";

// Return errors
export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

//Clear Errors
export const clearErrors = (msg, status, id = null) => {
  return {
    type: CLEAR_ERRORS,
  };
};
