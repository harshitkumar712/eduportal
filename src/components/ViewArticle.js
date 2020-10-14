import React,{useState,useEffect} from 'react';
import ViewArticleTable from './ViewArticleTable';
import Pagination from './Pagination'
import axios from "axios";
import Header from "./Header";
import '../styles/viewarticle.css'


const ViewArticle=(props)=>{
	const[articleData,setArticleData]=useState([]);
	// const[loading,setLoading]=useState(false);
	const [currentPage,setCurrentPage]=useState(1);
	const [perPage,setPerPage]=useState(10);

	useEffect(()=>{
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((result) => {
    	console.log(result.data);
       setArticleData(result.data);
    });



	},[])

const indexOfLast=currentPage*perPage;
const indexOfFirst=indexOfLast-perPage;
const currentData=articleData.slice(indexOfFirst,indexOfLast);

const paginate =(pageNumber)=>{
	setCurrentPage(pageNumber)
}

const handlePerPage=(e)=>{
	console.log(e.target.value);
	setPerPage(e.target.value);
}

	return(
	 <div>
    <Header props={props} />
	 	<div className="viewarticle">
      <div className=" container-fluid">
<div className="article-filter-container">
  <div className="article-filter">
	<div className="a-filter-header">Article Filter Form</div>
<form className="article-filter-form" >
  <div className="row">
    <div className="col">
    	<label 	>Enter ID</label>
      <input name="id"  type="text" className="form-control" placeholder="Search by ID" />
    </div>
    <div className="col">
    	<label 	>Enter Title</label>
      <input name="title"  type="text" className="form-control" placeholder="Search by Title" />
    </div>
  </div>
  <div className="row">
    <div className="col">
    	<label 	>Enter Category</label>
      <input name="category"  type="text" className="form-control" placeholder="Search by Category" />
    </div>
    <div className="col">
    	<label 	>Enter Author </label>
      <input name="auth"  type="text" className="form-control" placeholder="Search by Author" />
    </div>

  </div>
  <div className="m-2" style={{textAlign:'right'}}> <button type="submit" className="btn btn-primary">Search</button></div>
  
</form>	
</div>
</div>

<div className="article-details-container">
  <div className="article-details">
	<div className="a-details-header">
		View Article Details
	</div>
	<div className="a-details-page">
		<div>
			<div>Total Count:{articleData.length}</div>
	<p>Rows per Page &nbsp;
	<input onChange={handlePerPage} type="number"  min="10" max="50" step="10"/></p></div>
<Pagination perPage={perPage} totalLength={articleData.length} paginate={paginate} currentPage={currentPage} /></div>
<ViewArticleTable articleData={currentData}/>
</div>
</div>



</div>
	 	</div>
	 </div>
		)
}

export default ViewArticle;