import React from "react";
// import "bootstrap/dist/css/bootstrap.min";
import "./App.css";
// import Footer from "./components/Footer";
// import Content from "./components/Content";
// import Menu from "./components/Menu";
import AddArticle from './components/AddArticle'
import AddCategory from './components/AddCategory'
import ViewCategory from './components/ViewCategory'
import ViewArticle from './components/ViewArticle'
// import HomeTotal from "./components/HomeTotal";
// import HomeTable from "./components/HomeTable";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
// import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (

// const handleMenu=()=>{
//   
// }

    <div className="App">
      <Router>
        <div>
           {/* <Header /> */}
          <Route exact path="/" component={AdminLogin}></Route>
          <Route exact path="/admin" component={AdminHome}></Route>
          {/* <Route path ='/admin/home' component={AdminHome}></Route> */}
          <Route path ='/admin/addarticle' component={AddArticle}></Route>
          <Route path ='/admin/viewarticle' component={ViewArticle}></Route>
          <Route path ='/admin/addcategory' component={AddCategory}></Route>
          <Route path ='/admin/viewcategory' component={ViewCategory}></Route>
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
