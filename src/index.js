// import React, { Component } from "react";
// import ReactDOM from "react-dom/client";

// class Toggle extends Component {
//   state = { isOpen: false };

//   toggle = () => {
//     this.setState((state) => ({ isOpen: !state.isOpen }));
//   };

//   // show = () => this.setState({ isOpen: true });

//   // hide = () => this.setState({ isOpen: false });

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <>
//         <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
//         {/* <button onClick={this.show}>Show</button>
//         <button onClick={this.hide}>Hide</button> */}
//         {isOpen && children}
//       </>
//     );
//   }
// }

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState((state, props) => ({ value: state.value + props.step }));
//   };

//   handleDecrement = () => {
//     this.setState((state, props) => ({ value: state.value - props.step }));
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button" onClick={this.handleIncrement}>
//           Increment by {step}
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           Decrement by {step}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Counter step={5} />
// );

import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const login = form.elements.login.value;
    const password = form.elements.password.value;

    console.log(login, password);

    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="login" />
        <input type="password" name="password" />
        <button type="submit">Log in</button>
      </form>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<LoginForm />);
