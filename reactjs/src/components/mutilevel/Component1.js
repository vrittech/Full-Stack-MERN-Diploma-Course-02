import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContext from "../../context/AppContext";
import { increment, incrementByAmount, setTodos } from "../../redux/appSlice";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

export default function Component1() {
  const counter = useSelector((state) => state.app.counter);

  const dispatch = useDispatch();

  const getTodos = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((success) => {
        dispatch(setTodos(success.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTodosData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    dispatch(setTodos(response.data));
  };

  useEffect(() => {
    getTodosData();
  }, []);
  return (
    <div>
      <AppContext.Provider
        value={{
          name: "Ram",
          todos: [{ id: 1, title: "Hello" }],
        }}
      >
        <Component3 />
        <Component4 />
      </AppContext.Provider>
      {/* Component1
      <button onClick={() => dispatch(increment())}>Counter {counter}</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>
        Counter By Amount {counter}
      </button> */}
      {/* <Component2 /> */}
    </div>
  );
}
