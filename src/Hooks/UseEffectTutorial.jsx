import * as React from "react";

const UseEffectTutorial = () => {
  const [data, setData] = React.useState("");
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const apiCall = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      console.log("api is called");
      setData(data[0].email);
    };

    apiCall();
  }, []);
  return (
    <div className="App">
      <h2>use effect hooks trail</h2>
      <h3>hi, {data}</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default UseEffectTutorial;
