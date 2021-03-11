const initialState = {
  isRunning: true,
};

const animationReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "STARTSTOP":
      return { ...state, [action.payload]: !state[action.payload] };
    default:
      return { ...state, [action.payload]: state[action.payload] };
  }
};

export default animationReducer;
