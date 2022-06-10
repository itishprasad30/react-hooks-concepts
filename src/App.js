import "./App.css";
import * as React from "react";
import Counter from "./components/Counter";
import logo from "./logo.svg";
// import Profile from "./components/Profile";
// import Login from "./components/Login";
// import ChangeColor from "./components/ChangeColor";
// import UseLayoutEffect from "./Hooks/UseLayoutEffect";
// import UseMemoTutorail from "./Hooks/UseMemoTutorail";
// import UseCallbackTutorial from "./Hooks/UseCallbackTutorial";
// import UseEffectTutorial from "./Hooks/UseEffectTutorial";
// import UseRefTutorial from "./Hooks/UseRefTutorial";
// import ReducerTotorial from "./Hooks/ReducerTotorial";

// import UseState from "./Hooks/UseState";
function App() {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <ReducerTotorial /> */}
      {/* <UseEffectTutorial /> */}

      {/* <UseRefTutorial /> */}

      {/* <UseLayoutEffect /> */}

      {/* <UseMemoTutorail /> */}
      {/* <UseCallbackTutorial /> */}
      {/* <Profile />
      <Login />
      <ChangeColor /> */}
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
    </div>
  );
}

export default App;
