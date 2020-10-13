import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import AdminHome from './AdminHome'
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router } from "react-router-dom";
const Layout = () => {
	return (
		<div>
			{/* <Header/> */}
<div class="container-fluid" >
	<div class="row">
   <div class="col">
   	<Header/>
   </div>
   <div class="col">
   	<Router>
			<Route path ='/admin/home' component={AdminHome}></Route>
          {/* <Route path ='/admin/addarticle' component={AddArticle}></Route> */}
          {/* <Route path ='/admin/viewarticle' component={ViewArticle}></Route> */}
          {/* <Route path ='/admin/addcategory' component={AddCategory}></Route> */}
          {/* <Route path ='/admin/viewcategory' component={ViewCategory}></Route> */}


          </Router>
   </div>

		
		
	</div>
</div>

			


    
		</div>
	);
};

export default Layout;
