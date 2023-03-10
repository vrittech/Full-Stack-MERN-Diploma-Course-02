import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../../redux/appSlice";
import Component2 from "./Component2";

export default function Component1() {
  const counter = useSelector((state) => state.app.counter);

  const dispatch = useDispatch();
  return (
    <div>
      Component1
      <button onClick={() => dispatch(increment())}>Counter {counter}</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>
        Counter By Amount {counter}
      </button>
      <Component2 />
    </div>
  );
}
