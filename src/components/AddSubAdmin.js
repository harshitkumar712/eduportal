import React, { Component } from "react";
import Header from "./Header";
import "../styles/addsubadmin.css";
import axios from "axios";
import qs from "qs";

class AddSubAdmin extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    date: "",
  };

  handleInputChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      date: this.state.date,
    };

    axios({
      method: "post",
      url: "https://ptsv2.com/t/t2bd8-1601375113/post",
      data: qs.stringify(data),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Header props={this.props} />
        <div className="addsubadmin">
          <div className="container">
            <div className="wrapper">
              <form className="form-group" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    placeholder="Enter SubAdmin Name"
                    className="form-control"
                    required
                  />
                  {/* <label>ID</label> */}
                  {/* <input */}
                  {/*   type="text" */}
                  {/*   name="id" */}
                  {/*   value={this.state.id} */}
                  {/*   onChange={this.handleInputChange} */}
                  {/*   placeholder="Enter ID" */}
                  {/*   className="form-control" */}
                  {/* /> */}
                  {/* <label>Title</label> */}
                  {/* <input */}
                  {/*   type="text" */}
                  {/*   name="title" */}
                  {/*   value={this.state.title} */}
                  {/*   onChange={this.handleInputChange} */}
                  {/*   placeholder="Enter Title" */}
                  {/*   className="form-control" */}
                  {/* /> */}
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    placeholder="Enter Email"
                    className="form-control"
                    required
                  />

                  <label>Password</label>
                  <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    placeholder="Enter Password"
                    className="form-control"
                    required
                  />
                  <label>Date</label>
                  <input
                    className="form-control"
                    type="date"
                    value={this.state.date}
                    name="date"
                    onChange={this.handleInputChange}
                    required
                  />

                  <br />
                  <div style={{ textAlign: "center" }}>
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddSubAdmin;
