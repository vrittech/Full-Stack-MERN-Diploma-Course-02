import React from "react";

class ErrorBoundary extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      catchedError: false,
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ catchedError: error });
  }

  render() {
    const { children } = this.props;
    const { catchedError } = this.state;

    if (catchedError) return <div>Something went wrong</div>;

    // return the children
    return children;
  }
}

export default ErrorBoundary;
