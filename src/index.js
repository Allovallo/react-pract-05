import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
};

class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // this.setState({ login: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const { login, email, password } = this.state;
    console.log(
      `Login: ${this.state.login}, Email: ${this.state.email}, Password: ${this.state.password}`
    );
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          ></input>
        </label>

        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          ></input>
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <SignUpForm onSibmit={(values) => console.log(values)} />
);
