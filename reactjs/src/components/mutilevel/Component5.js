import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function Component5() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <p>Counter: {state.counter}</p>
      <button
        onClick={() =>
          dispatch({
            type: "increase",
          })
        }
      >
        Increase
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "increaseByValue",
            payload: 2,
          })
        }
      >
        Increase By Value
      </button>
    </div>
  );
}
