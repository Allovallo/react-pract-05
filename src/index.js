import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button
          type="button"
          onClick={(e) => {
            console.log("IB was clicked!", e);
            console.log("this.props: ", this.props);
          }}
        >
          Increment by {step}
        </button>
        <button
          type="button"
          onClick={(e) => {
            console.log("DB was clicked!", e);
            console.log("this.props: ", this.props);
          }}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Counter step={5} />
);
