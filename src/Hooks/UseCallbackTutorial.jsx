import * as React from "react";
import Child from "./Child";

const UseCallbackTutorial = () => {
  const [toggle, setToggle] = React.useState(false);
  const [data] = React.useState("please give a star in the github repo ");
  const btnHandle = () => {
    setToggle(!toggle);
  };
  const returnValue = React.useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );
  return (
    <div>
      <h1>UseCallabck </h1>
      <Child returnValue={returnValue} />
      {toggle && <h2>Togllge is Click</h2>}
      <button onClick={btnHandle}>toggle</button>
    </div>
  );
};

export default UseCallbackTutorial;
