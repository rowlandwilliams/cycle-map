const initialState = {
  tripsVisible: true,
  stationsVisible: true,
};

const showLayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOWHIDE":
      return { ...state, [action.payload]: !state[action.payload] };
    default:
      return { ...state, [action.payload]: state[action.payload] };
  }
};

export default showLayerReducer;
