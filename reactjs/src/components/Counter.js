import { useState } from "react";

function Counter() {
  const [name, setName] = useState("Arjun");
  const [counter, setCounter] = useState(0);

  function clickme() {
    setName("Shyam");
  }

  const increase = () => {
    console.log("+");
    setCounter((prevState) => prevState + 1);
  };

  const decrease = () => {
    console.log("-");
    setCounter((prevState) => prevState - 1);
  };

  return (
    <div className="App">
      <h1>hello {name} </h1>
      <button onClick={clickme}>Click me</button>
      <h2>{counter}</h2>
      <button onCliÍck={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;
