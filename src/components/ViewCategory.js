import React,{useState,useEffect} from 'react';
import ViewCategoryTable from './ViewCategoryTable';
import Pagination from './Pagination'
import axios from "axios";
import Header from "./Header";
import '../styles/viewcategory.css'
import qs from "qs";


const ViewCategory=(props)=>{
  const initialInputState = { name:'', author:'',date:'' };
  const [inputFields, setInputFields] = useState(initialInputState);
	const[categoryData,setCategoryData]=useState([]);
	 const[loading,setLoading]=useState(false);
	const [currentPage,setCurrentPage]=useState(1);
	const [perPage,setPerPage]=useState(10);

	useEffect(()=>{
    axios({
      method: "post",
      // url: "https://jsonplaceholder.typicode.com/posts",
       url: "http://192.187.126.18:8082/home/viewCategory",
    }).then((result) => {
    	console.log(result.data.Data);
      setLoading(true);
       setCategoryData(result.data.Data);
    });



	},[])


  const handleInputChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    setInputFields({ ...inputFields, [name]:value });
    console.log(inputFields);
  };

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

const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(false);
    const data = {
     
      name: inputFields.name,
      date: inputFields.date,
      author: inputFields.author,
    };
    if(data.name==='')
      delete data.name;
     if(data.date==='')
      delete data.date;
     if(data.author==='')
      delete data.author;
 console.log(data);
    axios({
      method: "post",
       url: "http://192.187.126.18:8082/home/viewCategory",

      data: qs.stringify(data),
    })
      .then((response) => {
        console.log(response);
        setLoading(true);
       setCategoryData(response.data.Data);

      })
      .catch((error) => {
        console.log(error);
      });

  // axios({
  //     method: "get",
  //     url: "https://jsonplaceholder.typicode.com/posts",
  //   }).then((result) => {
  //     console.log(result.data);
  //    setLoading(true);
  //      setCategoryData(result.data);
  //   });

  };

	return(
	 <div>
    <Header props={props} />
	 	<div className="viewcategory ">
      <div className=" container-fluid">
<div className="category-filter-container">
  <div className="category-filter">
	<div className="c-filter-header">Category Filter Form</div>
<form className="category-filter-form" onSubmit={handleSubmit}>
  <div className="row">
    <div className="col">
    	{/* <label 	>Enter ID</label> */}
     {/*  <input name="id"  type="text" className="form-control" placeholder="Search by ID" /> */}
      <label>Date</label>
                  <input
                    className="form-control"
                    type="date"
                    value={inputFields.date}
                    name="date"
                    onChange={handleInputChange}
                  />
    </div>
    {/* <div className="col"> */}
    {/* 	<label 	>Enter Title</label> */}
    {/*   <input name="title"  type="text" value={inputFields.title}  onChange={handleInputChange} className="form-control" placeholder="Search by Title" /> */}
    {/* </div> */}
  
    <div className="col">
    	<label>Select Category</label>
                  <select
                    className="form-control"
                    name="name"
                    value={inputFields.name}
                    onChange={handleInputChange}
                  >
                   <option value=''>None of these</option>
                    <option value="aiims">AIIMS</option>
                    <option value="neet">NEET</option>
                    <option value="fet">FET</option>
                    <option value="jipmer">JIPMER</option>
                    <option value="pgimer">PGIMER</option>
                  </select>
    </div>
    <div className="col">
    	<label 	>Enter Author </label>
      <input name="author"  type="text" value={inputFields.author}  onChange={handleInputChange} className="form-control" placeholder="Search by Author" />
    </div>

  </div>
  <div className="m-2" style={{textAlign:'right'}}> <button type="submit" className="btn btn-primary">Search</button></div>
  
</form>	
</div>
</div>

<div className="category-details-container">
  <div className="category-details">
	<div className="c-details-header">
		View Category Details
	</div>
	<div className="c-details-page">
		<div>
			<div>Total Count:{categoryData.length}</div>
	<p>Rows per Page &nbsp;
	<input onChange={handlePerPage} type="number"  min="10" max="50" step="10"/></p></div>
<Pagination perPage={perPage} totalLength={categoryData.length} paginate={paginate} currentPage={currentPage} /></div>
<ViewCategoryTable categoryData={currentData} loading={loading}/>
</div>
</div>



</div>
	 	</div>
	 </div>
		)
}

export default ViewCategory;