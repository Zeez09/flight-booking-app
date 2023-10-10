// In a separate file called actions.js
export const SET_DATA = "SET_DATA";

export const setData = (
  selectedCurrency,
  flyingFrom,
  flyingTo,
  adultCount,
  childCount,
  infantCount,
  classes,
  tripType,
  returnDate,
  date
) => {
  return (dispatch) => {
    // Make an API call or perform other asynchronous tasks here
    // Dispatch an action when the tasks are complete
    dispatch({
      type: SET_DATA,
      payload: {
        selectedCurrency,
        flyingFrom,
        flyingTo,
        adultCount,
        childCount,
        infantCount,
        classes,
        tripType,
        returnDate,
        date,
      },
    });
  };
};
