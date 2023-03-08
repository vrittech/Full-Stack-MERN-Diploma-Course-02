import React, { Component } from "react";

class Header extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    console.log("componentDidMount", this.state, this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate",
      prevProps,
      prevState,
      this.props,
      this.state
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  setCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;
    const { name } = this.props;

    return (
      <div>
        <h1>Header </h1>
        <p>{counter}</p>
        <p>{name}</p>
        <button onClick={this.setCounter}>Add</button>
      </div>
    );
  }
}

export default Header;
