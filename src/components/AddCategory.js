import React, { Component } from "react";
import Header from "./Header";
import "../styles/addcategory.css";
import axios from "axios";
import qs from "qs";

class AddCategory extends Component {
  state = {
    name: "",
    // id: "",
    // title: "",
    description: "",
    date: "",
    author: "",
    lid: "",
  };

  componentDidMount() {
    this.setState({ lid: localStorage.getItem("id") });
  }

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
      // id: this.state.id,
      // title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      author: this.state.author,
      lid: this.state.lid,
    };

    axios({
      method: "post",
      // url: "https://ptsv2.com/t/t2bd8-1601375113/post",
      url: "http://192.187.126.18:8082/home/addCategory",

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
                  <label>Date</label>
                  <input
                    className="form-control"
                    type="date"
                    value={this.state.date}
                    name="date"
                    onChange={this.handleInputChange}
                    required
                  />

                  <label>Description</label>
                  <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    placeholder="Enter Description"
                    className="form-control"
                    required
                  />

                  <label>Author</label>
                  <input
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    placeholder="Enter Author name"
                    className="form-control"
                    required
                  />
                  <br />
                  <div style={{ textAlign: "center" }}>
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
