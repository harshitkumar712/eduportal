import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import Header from "./Header";
 import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ClassicEditor from "../../services/ckeditor5-build-classic";
import "../styles/addarticle.css";
import axios from "axios";
import qs from 'qs';

class AddArticle extends Component {
  state = {
    // id: "",
    lid:'',
    // category:"",
    satName:"",
    date:"",
    title: "",
    description: "",
    author: "",
    is_Reviewd: 0,
    body: "",
  };

componentDidMount() {
   this.setState({lid:localStorage.getItem('id')});
  } 
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
      // id: this.state.id,
      // category:this.state.category,
      satName:this.state.satName,
      date:this.state.date,
      title: this.state.title,
      description: this.state.description,
      author: this.state.author,
      // is_Reviewd: this.state.is_Reviewd,
      body: this.state.body,
      lid: this.state.lid,
    };
    
    // axios.post('http://13.59.47.18:8081/home/FormData',this.state)

axios({
      method: "post",
      url: "http://192.187.126.18:8082/home/addArticles",
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
      <div>
        <Header props={this.props} />
      <div className="addarticle">
        <div className="container">
          <div className="wrapper">
            <form className="form-group" onSubmit={this.handleSubmit}>
              <div className="form-group">
        {/*         <label>ID</label> */}
        {/*         <input */}
        {/*           type="text" */}
        {/*           name="id" */}
        {/*           value={this.state.id} */}
        {/*  */}
        {/*           onChange={this.handleInputChange} */}
        {/*           placeholder="Enter ID" */}
        {/*           className="form-control" */}
        {/*         /> */}
        {/*  <label>Enter Category</label> */}
        {/*         <input */}
        {/*           type="text" */}
        {/*           name="category" */}
        {/*           value={this.state.category} */}
        {/*  */}
        {/*           onChange={this.handleInputChange} */}
        {/*           placeholder="Enter Category Name" */}
        {/*           className="form-control" */}
        {/*         /> */}
                <label>Enter Sub-Category</label>
                <input
                  type="text"
                  name="satName"
                  value={this.state.satName}
        
                  onChange={this.handleInputChange}
                  placeholder="Enter Sub-Category Name"
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

                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
            
                  onChange={this.handleInputChange}
                  placeholder="Enter Title"
                  className="form-control"
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
                <label>Body of Article</label>

                <CKEditor
                  editor={ClassicEditor}
                  className="form-control"
                  onChange={this.handleChange}
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

export default AddArticle;
