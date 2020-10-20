export const Increment = (value) => {
  return {
    type: "INCREMENT",
    payload: {
      number: value + 1,
    },
  };
};

export const Decrement = (value) => {
  return {
    type: "DECREMENT",
    payload: {
      number: value - 1,
    },
  };
};
