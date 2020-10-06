import React from "react";

import "../styles/adminlogin.css";


class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
console.log(this.state.user,this.state.password)
    this.setState({ user: "", password: "" });

  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login-container">

<div className='login-header'><h1 >Education Portal</h1><p>Empowering students to create solutions for tomorrow’s challenges.</p></div>

      <div className="login-form">
        <h2>ADMIN LOGIN</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="user">Username</label>
          <input
            className='form-input'
            onChange={this.handleChange}
            name="user"
            id="user"
            type="text"
            value={this.state.user}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className='form-input'
            onChange={this.handleChange}
            name="password"
            type="password"
            id="password"
            value={this.state.password}
            required
          />
          <button className="login-button" onClick={this.handleSubmit} type="submit">Sign In</button>
          
        </form>
      </div></div>
    );
  }
}
export default AdminLogin;
