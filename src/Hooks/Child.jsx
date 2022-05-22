import React, { useEffect } from "react";

const Child = ({ returnValue }) => {
  useEffect(() => {
    console.log("Function was called");
  }, [returnValue]);
  return (
    <div>
      <p>child componet of callabck funtion</p>
      {returnValue("Itish")}
    </div>
  );
};

export default Child;
