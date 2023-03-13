import React, { useReducer } from "react";
import AppContext from "../../context/AppContext";
import Component5 from "./Component5";

const initialState = {
  counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return {
        counter: state.counter + 1,
      };

    case "increaseByValue":
      console.log(action);
      return {
        counter: state.counter + action.payload,
      };

    default:
      break;
  }
}

export default function Component4() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Component5 />
    </AppContext.Provider>
  );
}
