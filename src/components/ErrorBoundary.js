import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Update state to indicate that an error has occurred
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <p id="error">
          An error has occurred in this component.
        </p>
      );
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
