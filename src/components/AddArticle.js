import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";

 import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ClassicEditor from "../../services/ckeditor5-build-classic";
import "../styles/addarticle.css";
import axios from "axios";
import qs from 'qs';

class AddArticle extends Component {
  state = {
    id: "",
    title: "",
    desc: "",
    Author: "",
    is_Reviewd: 0,
    body: "",
  };

  handleChange = (event, editor) => {
    const data = editor.getData();
    this.setState({ body: data });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    name === "is_Reviewd"
      ? this.setState({
          [name]: 1 - this.state.is_Reviewd,
        })
      : this.setState({
          [name]: value,
        });
      console.log(this.state);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.id,
      title: this.state.title,
      desc: this.state.desc,
      Author: this.state.Author,
      is_Reviewd: this.state.is_Reviewd,
      body: this.state.body,
    };
    
    // axios.post('http://13.59.47.18:8081/home/FormData',this.state)

axios({
      method: "post",
      url: "http://13.59.47.18:8081/home/FormData",
      data: qs.stringify(data)
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
      <div className="addarticle">
        <div className="container">
          <div className="wrapper">
            <form className="form-group" onSubmit={this.handleSubmit}>
              <div className="form-group">
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
                <label>Body of Article</label>

                <CKEditor
                  editor={ClassicEditor}
                  className="form-control"
                  onChange={this.handleChange}
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
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                
                    value={this.state.is_Reviewd}
                    onChange={this.handleInputChange}
                    name="is_Reviewd"
                    
                  />
                  <label className="form-check-label" htmlFor="check">
                    Is Reviewed?
                  </label>
                </div>
                <br/>
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddArticle;
