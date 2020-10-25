import React, { useState, useEffect } from "react";
import ViewArticleTable from "./ViewArticleTable";
import Pagination from "./Pagination";
import axios from "axios";
import Header from "./Header";
import "../styles/viewarticle.css";
import qs from "qs";

const ViewArticle = (props) => {
  const initialInputState = { name: "", author: "", date: "", title: "" };
  const [inputFields, setInputFields] = useState(initialInputState);
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://192.187.126.18:8082/home/viewArticle",
      // url: "http://192.187.126.18:8082/home/viewArticle",
    }).then((result) => {
      console.log(result);
      setLoading(true);
      setArticleData(result.data.Data);
    });
  }, []);

  const handleInputChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    setInputFields({ ...inputFields, [name]: value });
    console.log(inputFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(false);
    const data = {
      name: inputFields.name,
      date: inputFields.date,
      author: inputFields.author,
      title: inputFields.title,
    };
    if (data.name === "") delete data.name;
    if (data.date === "") delete data.date;
    if (data.author === "") delete data.author;
    if (data.title === "") delete data.title;
    console.log(data);
    axios({
      method: "post",
      url: "http://192.187.126.18:8082/home/viewArticle",

      data: qs.stringify(data),
    })
      .then((response) => {
        console.log(response);
        setLoading(true);
        setArticleData(response.data.Data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentData = articleData.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePerPage = (e) => {
    console.log(e.target.value);
    setPerPage(e.target.value);
  };

  return (
    <div>
      <Header props={props} />
      <div className="viewarticle">
        <div className=" container-fluid">
          <div className="article-filter-container">
            <div className="article-filter">
              <div className="a-filter-header">Article Filter Form</div>
              <form className="article-filter-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <label>Date</label>
                    <input
                      className="form-control"
                      type="date"
                      value={inputFields.date}
                      name="date"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col">
                    <label>Enter Title</label>
                    <input
                      name="title"
                      value={inputFields.title}
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      placeholder="Search by Title"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Select Category</label>
                    <select
                      className="form-control"
                      name="name"
                      value={inputFields.name}
                      onChange={handleInputChange}
                    >
                      <option value="">None of these</option>
                      <option value="aiims">AIIMS</option>
                      <option value="neet">NEET</option>
                      <option value="fet">FET</option>
                      <option value="jipmer">JIPMER</option>
                      <option value="pgimer">PGIMER</option>
                    </select>
                  </div>
                  <div className="col">
                    <label>Enter Author </label>
                    <input
                      name="author"
                      value={inputFields.author}
                      onChange={handleInputChange}
                      type="text"
                      className="form-control"
                      placeholder="Search by Author"
                    />
                  </div>
                </div>
                <div className="m-2" style={{ textAlign: "right" }}>
                  {" "}
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="article-details-container">
            <div className="article-details">
              <div className="a-details-header">View Article Details</div>
              <div className="a-details-page">
                <div>
                  <div>Total Count:{articleData.length}</div>
                  <p>
                    Rows per Page &nbsp;
                    <input
                      onChange={handlePerPage}
                      type="number"
                      min="10"
                      max="50"
                      step="10"
                    />
                  </p>
                </div>
                <Pagination
                  perPage={perPage}
                  totalLength={articleData.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
              <ViewArticleTable articleData={currentData} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewArticle;
