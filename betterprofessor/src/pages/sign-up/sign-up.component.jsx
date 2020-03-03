import React from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

class SignUp extends React.Component {
  state = {
    credentials: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  };

  // handle the changes of credential
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // login axios, axios with auth is being built in
  login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/auth/register", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/signin");
        console.log(res);
      })
      .catch(err => console.log(err.message));
  };

  // render the login form, username and password
  render() {
    return (
      <div>
        <h1 className="login-title">Log In</h1>

        <form onSubmit={this.login} className="credential-form">
          <input
            type="text"
            name="firstName"
            value={this.state.credentials.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
            className="credential-input"
          />

          <input
            type="text"
            name="lastName"
            value={this.state.credentials.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
            className="credential-input"
          />

          <input
            type="email"
            name="email"
            value={this.state.credentials.email}
            onChange={this.handleChange}
            placeholder="Email"
            className="credential-input"
          />

          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="Password"
            className="credential-input"
          />

          <button className="credential-button">Log In</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
