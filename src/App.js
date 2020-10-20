import React from "react";
import { connect } from "react-redux";
import { Increment, Decrement } from "./Actions/Actions";
// import Decrement from "./Actions/Actions";

function App(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={() => props.dispatch(Increment(props.number))}>
        Increment
      </button>
      <button onClick={() => props.dispatch(Decrement(props.number))}>
        Increment
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(App);
