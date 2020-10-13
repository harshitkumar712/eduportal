import React, { Component } from "react";
import Header from "./Header";
import "../styles/addcategory.css";
import axios from "axios";
import qs from "qs";

class AddCategory extends Component {
  state = {
    name: "",
    id: "",
    title: "",
    desc: "",
    Author: "",
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
      id: this.state.id,
      title: this.state.title,
      desc: this.state.desc,
      Author: this.state.Author,
    };

    // axios.post('http://13.59.47.18:8081/home/FormData',this.state)

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

    //     axios({
    //       method: "post",
    //       url: "http://13.59.47.18:8081/home/FormData",
    //
    //       data: data,
    //     })
    //       .then((response) => {
    //         console.log(response);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
  };

  render() {
    return (
      <div>
        <Header props={this.props} />
      <div className="addcategory">
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
                  placeholder="Enter Name of Category"
                  className="form-control"
                />
                <label>ID</label>
                <input
                  type="text"
                  name="id"
                  value={this.state.id}
                  onChange={this.handleInputChange}
                  placeholder="Enter ID"
                  className="form-control"
                />
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder="Enter Title"
                  className="form-control"
                />
                <label>Description</label>
                <input
                  type="text"
                  name="desc"
                  value={this.state.desc}
                  onChange={this.handleInputChange}
                  placeholder="Enter Description"
                  className="form-control"
                />

                <label>Author</label>
                <input
                  type="text"
                  name="Author"
                  value={this.state.Author}
                  onChange={this.handleInputChange}
                  placeholder="Enter author name"
                  className="form-control"
                />
                <br />
                <div style={{textAlign:'center'}}>
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary"
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

export default AddCategory;
