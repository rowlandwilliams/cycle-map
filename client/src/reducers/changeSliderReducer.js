const initialState = {
  tripsLengthSlider: {
    value: 180,
    min: 10,
    max: 180,
    step: 1,
  },
  tripsWidthSlider: {
    value: 3,
    min: 1,
    max: 10,
    step: 1,
  },
  stationsWidthSlider: {
    value: 20,
    min: 20,
    max: 50,
    step: 1,
  },
};

const changeSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          value: [action.value],
        },
      };
    }
    default:
      return state;
  }
};

export default changeSliderReducer;
