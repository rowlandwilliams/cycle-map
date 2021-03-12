const initialState = {
  time: 0,
};

const setTime = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        time: (action.time + action.step) % action.loopLength,
      };
    case "SLIDE": {
      // called when time slider is dragged
      return {
        ...state,
        time: action.value,
      };
    }
    default:
      return state;
  }
};

export default setTime;
