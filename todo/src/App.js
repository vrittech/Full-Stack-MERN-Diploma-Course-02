import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./pages/Todo";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="todo/:todoId" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
