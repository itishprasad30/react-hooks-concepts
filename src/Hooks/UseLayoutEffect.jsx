import * as React from "react";

const UseLayoutEffect = () => {
  React.useEffect(() => {
    console.log("useEffect fires once");
  }, []);

  // it always fires 1st
  React.useLayoutEffect(() => {
    console.log("Uselayouteffect fires once");
  }, []);

  return (
    <div>
      <div>useLayoutEffect basic</div>
      <p>
        when you need to change in the dom element then use layouteffect, it
        fires syncronously in the DOM of the broswer
      </p>
    </div>
  );
};

export default UseLayoutEffect;
