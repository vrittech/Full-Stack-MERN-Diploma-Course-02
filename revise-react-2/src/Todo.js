import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const Todo = () => {
  const { getLocalData, setLocalData } = useLocalStorage();
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = () => {
    const newTodos = [
      ...todos,
      {
        id: Date.now(),
        todo,
      },
    ];
    setTodos(newTodos);
    setLocalData("todos", JSON.stringify(newTodos));
  };

  const handleDelete = (todoValue) => {
    const filterTodos = todos.filter((t) => t.id !== todoValue);
    setLocalData("todos", JSON.stringify(filterTodos));
    setTodos(filterTodos);
  };

  useEffect(() => {
    const localTodos = getLocalData("todos");
    setTodos(JSON.parse(localTodos));
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      <br />
      <input value={todo.todo} name="todo" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={() => handleDelete(todo.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
