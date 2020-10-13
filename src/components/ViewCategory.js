import React,{useState,useEffect} from 'react';
import ViewCategoryTable from './ViewCategoryTable';
import Pagination from './Pagination'
import axios from "axios";
import '../styles/viewcategory.css'


const ViewCategory=()=>{
	const[categoryData,setCategoryData]=useState([]);
	// const[loading,setLoading]=useState(false);
	const [currentPage,setCurrentPage]=useState(1);
	const [perPage,setPerPage]=useState(10);

	useEffect(()=>{
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((result) => {
    	console.log(result.data);
       setCategoryData(result.data);
    });



	},[])

const indexOfLast=currentPage*perPage;
const indexOfFirst=indexOfLast-perPage;
const currentData=categoryData.slice(indexOfFirst,indexOfLast);

const paginate =(pageNumber)=>{
	setCurrentPage(pageNumber)
}

const handlePerPage=(e)=>{
	console.log(e.target.value);
	setPerPage(e.target.value);
}

	return(
	 <div>
	 	<div className="viewcategory container">
<div className="category-filter">
	<div className="filter-header">Category Filter Form</div>
<form >
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
  <div className="m-2"> <button type="submit" className="btn btn-primary">Search</button></div>
  
</form>	
</div>

<div className="category-details">
	<div className="c-details-header">
		View Category Details
	</div>
	<div className="c-details-page">
		<div>
			<div>Total Count:{categoryData.length}</div>
	<p>Rows per Page
	<input onChange={handlePerPage} type="number"  min="10" max="50" step="10"/></p></div>
<Pagination perPage={perPage} totalLength={categoryData.length} paginate={paginate} currentPage={currentPage} /></div>
<ViewCategoryTable categoryData={currentData}/>

</div>




	 	</div>
	 </div>
		)
}

export default ViewCategory;