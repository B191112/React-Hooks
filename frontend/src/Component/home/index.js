import { useState, useEffect } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("NIHTIN");
    document.title= `count: ${count}`;
  });

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default Home;
