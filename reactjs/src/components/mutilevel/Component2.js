import React from "react";
import { useSelector } from "react-redux";
import Component3 from "./Component3";

export default function Component2() {
  const { todos } = useSelector((state) => state.app);
  return (
    <div>
      Component2
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      <Component3 />
    </div>
  );
}
