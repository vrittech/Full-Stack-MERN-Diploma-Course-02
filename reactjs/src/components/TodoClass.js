import React, { Component } from "react";

class TodoClass extends Component {
  state = {
    todo: "",
    todos: [],
  };

  handleChange = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  formSubmit = () => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, this.state.todo],
    }));

    this.setState({
      todo: "",
    });
  };

  deleteMe = (value) => {
    const filterTodos = this.state.todos.filter((t) => t !== value);
    this.setState({
      todos: filterTodos,
    });
  };

  render() {
    const { todo, todos } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="todo-wrapper">
            <h1>Todo List</h1>
            <div className="form">
              <input
                value={todo}
                onChange={this.handleChange}
                type="text"
                id="todo"
              />
              <button onClick={this.formSubmit} id="addTask">
                Add Task
              </button>
            </div>
            {todos.map((element, i) => {
              return (
                <div key={i} id="item">
                  <p>{element}</p>
                  <button onClick={() => this.deleteMe(element)}>Delete</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoClass;
