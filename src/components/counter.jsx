import React from "react";

const Counter = props => {
  return (
    <div>
      <span>{props.counter.value}</span>
      <button onClick={() => props.onInc(props.counter)}>Inc</button>
    </div>
  );
};

export default Counter;
