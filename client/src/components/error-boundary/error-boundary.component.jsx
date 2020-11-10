import React from "react";

import "./error-boundary.style.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasErrored: true,
    };
  } //have to do this, otherwise we're not aware of the children inside of this component actually throwing errors
  //allows us to catch the error ahead fo time when it gets throins insdie any of the children nested in this error boundary component

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-image-overlay">
          <div className="error-image-container"></div>
          <p className="error-image-text">A dog ate this page</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
