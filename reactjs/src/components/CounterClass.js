import { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Arjun",
      counter: 0,
    };
  }

  // state = {
  //   name: "Arjun",
  //   counter: 0,
  // };

  clickme = () => {
    this.setState({ name: "Shyam" });
  };

  increase = () => {
    console.log("+");

    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  decrease = () => {
    console.log("-");
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <h1>Hello {name}</h1>
        <button onClick={this.clickme}>Click me</button>
        <h2>{counter}</h2>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default CounterClass;
