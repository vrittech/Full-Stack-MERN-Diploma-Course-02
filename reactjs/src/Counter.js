import { useState } from "react";

const names = ["Arjun", "Ram", "Hari", "Bhuwan"];

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
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>

      {names.map((element) => {
        return <p>{element} </p>;
      })}
    </div>
  );
}

export default Counter;
