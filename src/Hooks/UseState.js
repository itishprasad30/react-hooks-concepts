import * as React from "react";

const UseState = () => {
  //  useState
  const [counter, setCounter] = React.useState(0);
  const [input, setInput] = React.useState("");

  //   function to increment the counter
  const increment = () => {
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    // setCounter(counter - 1);
    setCounter((prev) => prev - 1);
  };

  //  inputHanldle
  function inputHanldle(e) {
    setInput(e.target.value);
  }
  return (
    <div>
      <h1>UseState State tutorial for this</h1>

      <div className="App">
        <button onClick={decrement}>decrement</button>
        <div>{counter}</div>
        <button onClick={increment}>increment</button>
      </div>

      <div className="App">
        <input
          type="text"
          onChange={inputHanldle}
          value={input}
          placeholder="Type Something"
        />
        <br />
        {input}
      </div>
    </div>
  );
};

export default UseState;
