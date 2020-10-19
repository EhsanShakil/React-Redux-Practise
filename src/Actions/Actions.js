const Increment = (value) => {
  return {
    type: "INCREMENT",
    payload: {
      number: value + 1,
    },
  };
};
export default Increment;
