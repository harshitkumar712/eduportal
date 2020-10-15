import React from "react";
import axios from "axios";
import qs from "qs";
import "../styles/adminlogin.css";
import Background from '../images/background.jpg';

var back = {
  width: "100%",
  height: "100vh",
 backgroundImage: `url(${Background})`,
};


class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
console.log(this.state.username,this.state.password)
    
     const data = {
      username: this.state.username,
      password: this.state.password,
    };
    axios({
      method: "post",
      url: "https://ptsv2.com/t/t2bd8-1601375113/post",
      data: qs.stringify(data),
    })
      .then((response) => {
        
        console.log(response);
      localStorage.setItem('auth',JSON.stringify(response.data));
       
      })
      .catch((error) => {
        console.log(error);
      });
  this.setState({ username: "", password: "" });
  this.props.history.push('/admin');
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login-container" style={ back }>

<div className='login-header'>
  <h1 >Education Portal</h1><p>Empowering students to create solutions for tomorrow’s challenges.</p></div>

      <div className="login-form">
        <h2>ADMIN LOGIN</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            className='form-input'
            onChange={this.handleChange}
            name="username"
            id="username"
            type="text"
            value={this.state.username}
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
