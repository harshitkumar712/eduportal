import React from "react";
// import "bootstrap/dist/css/bootstrap.min";
import "./App.css";

import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Content from "./components/Content";
import Menu from "./components/Menu";
// import HomeTotal from "./components/HomeTotal";
// import HomeTable from "./components/HomeTable";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
// import Layout from "./components/Layout";
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <div>
          <Menu/>
          </div>
          <Route exact path="/" component={AdminLogin}></Route>

          <Route path ='/admin/home' component={AdminHome}></Route>
          {/* <Route path ='/admin/addarticle' component={AddArticle}></Route> */}
          {/* <Route path ='/admin/viewarticle' component={ViewArticle}></Route> */}
          {/* <Route path ='/admin/addcategory' component={AddCategory}></Route> */}
          {/* <Route path ='/admin/viewcategory' component={ViewCategory}></Route> */}
        </div>
      </Router>
      {/* <Router> */}
      {/*     <Header/><HomeTotal/><HomeTable/><Menu/> */}
      {/*     <Content/><Footer/> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
