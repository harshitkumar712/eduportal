import React, { Component } from "react";
import Header from "./Header";
import "../styles/addsubcategory.css";
import axios from "axios";
import qs from "qs";

class AddSubCategory extends Component {
  state = {
    catName: "aiims",
    satName: "",
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
      catName: this.state.catName,
      satName: this.state.satName,
      date: this.state.date,
      author: this.state.author,
      lid: this.state.lid,
    };

    axios({
      method: "post",
      url: "http://192.187.126.18:8082/home/addSubCategory",
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
        <div className="addsubcategory">
          <div className="container">
            <div className="wrapper">
              <form className="form-group" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  {/*          <label>Category</label> */}
                  {/*         <input */}
                  {/*           type="text" */}
                  {/*           name="catName" */}
                  {/*           value={this.state.catName} */}
                  {/*  */}
                  {/*           onChange={this.handleInputChange} */}
                  {/*           placeholder="Enter Category Name" */}
                  {/*           className="form-control" */}
                  {/*         /> */}
                  <label>Select Category</label>
                  <select
                    className="form-control"
                    name="catName"
                    value={this.state.catName}
                    onChange={this.handleInputChange}
                  >
                    <option value="aiims">AIIMS</option>
                    <option value="neet">NEET</option>
                    <option value="fet">FET</option>
                    <option value="jipmer">JIPMER</option>
                    <option value="pgimer">PGIMER</option>
                  </select>
                  <label>Sub-Category</label>
                  <input
                    type="text"
                    name="satName"
                    value={this.state.satName}
                    onChange={this.handleInputChange}
                    placeholder="Enter Sub-Category Name"
                    className="form-control"
                  />
                  <label>Date</label>
                  <input
                    className="form-control"
                    type="date"
                    value={this.state.date}
                    name="date"
                    onChange={this.handleInputChange}
                  />

                  <label>Author</label>
                  <input
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    placeholder="Enter Author name"
                    className="form-control"
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

export default AddSubCategory;
