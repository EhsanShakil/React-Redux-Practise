const initialState = {
  number: 0,
};

const incrementReducer = (state = initialState, action) => {
  switch (action.payload) {
    case "INCREMENT":
      return {
        number: action.payload.number,
      };
    default:
      return state;
  }
};

export default incrementReducer;
