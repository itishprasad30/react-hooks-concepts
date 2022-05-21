import * as React from "react";

const UseMemoTutorail = () => {
  const [data, setData] = React.useState(null);
  const [toggle, setToggle] = React.useState(true);

  React.useEffect(() => {
    const apiCall = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      console.log("api is called");
      setData(data);
    };

    apiCall();
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";

    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("This was computed.");
    return longestName;
  };

  const getLongestName = React.useMemo(() => findLongestName(data), [data]);
  return (
    <div>
      <h3>UseMemo tutorial for the minimizing the computation power</h3>

      <p>{getLongestName}</p>

      <button onClick={() => setToggle(!toggle)}>toggle here</button>
      {toggle && <h2>Toggle</h2>}
    </div>
  );
};

export default UseMemoTutorail;
