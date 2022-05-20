import * as React from "react";

const UseRefTutorial = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);

  function onclick() {
    setValue(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  }
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="type here...." />
      <button onClick={onclick}>change here</button>
      <p>{value}</p>
    </div>
  );
};

export default UseRefTutorial;
