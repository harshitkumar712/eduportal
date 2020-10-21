import React from "react";
import axios from "axios";
// import qs from "qs";
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
      error:'',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
console.log(this.state.username,this.state.password)
    
     const data = {
      username: this.state.username,
      password: this.state.password,
    };
    // console.log(qs.stringify(data))
    // console.log(decodeURIComponent(qs.stringify(data)))
    axios({
      method: "get",
       url: `http://192.187.126.18:8082/home/login?username=${data.username}&password=${data.password}`,
      // url: 'http://192.187.126.18:8082/home/login',
      // data: decodeURIComponent(qs.stringify(data)),
    })
      .then((response) => {
        const responseData=response.data;
        if(!responseData.msgType){
          console.log(responseData);
          localStorage.setItem('id',responseData.Lid );
  localStorage.setItem('type', responseData.LoginType);
        
           this.props.history.push('/admin');
        }
        else{
           this.setState({error:responseData.Message})
        }
       // localStorage.setItem('auth',JSON.stringify(response.data));
       
      })
      .catch((error) => {
        console.log(error);
      });

  this.setState({ username: "", password: "" });
  
        
 
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
         <div className='login-form-error'>{this.state.error}</div>
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
