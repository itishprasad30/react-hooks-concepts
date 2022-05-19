import * as React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1, showText: state.showText };
    case "toggleCase":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTotorial = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
    showText: true,
  });
  return (
    <div>
      <h1>Use reducer tutorial</h1>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "toggleCase" });
        }}
      >
        Click here
      </button>
      {state.showText && <h2>This is a Text</h2>}
    </div>
  );
};

export default ReducerTotorial;
