const showTripsReducer = (state = true, action) => {
  switch (action.type) {
    case "SHOWHIDE":
      return !state;
    default:
      return state;
  }
};

export default showTripsReducer;
