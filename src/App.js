import "./App.css";
import * as React from "react";
// import UseEffectTutorial from "./Hooks/UseEffectTutorial";
import UseRefTutorial from "./Hooks/UseRefTutorial";
// import ReducerTotorial from "./Hooks/ReducerTotorial";

// import UseState from "./Hooks/UseState";
function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <ReducerTotorial /> */}
      {/* <UseEffectTutorial /> */}

      <UseRefTutorial />
    </div>
  );
}

export default App;
