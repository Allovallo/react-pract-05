import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class SignUpForm extends Component {
  state = {
    login: "",
  };

  handleChange = (e) => {
    this.setState({ login: e.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.login}`);
    this.props.onSibmit({ ...this.state });
  };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            value={login}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Sign up as {login}</button>
      </form>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <SignUpForm onSibmit={(values) => console.log(values)} />
);
