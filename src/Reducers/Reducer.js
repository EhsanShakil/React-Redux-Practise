const initialState = {
  number: 0,
};

const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        number: action.payload.number,
      };
    case "DECREMENT":
      return {
        ...state,
        number: action.payload.number,
      };
    default:
      return state;
  }
};

export default incrementReducer;
