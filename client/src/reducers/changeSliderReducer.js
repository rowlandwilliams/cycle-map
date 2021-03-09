const initialState = {
  defaultValue: 180,
  value: 180,
  min: 0,
  max: 180,
  step: 1,
};

const changeSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
      };
    }
    default:
      return state;
  }
};

export default changeSliderReducer;
