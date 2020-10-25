import React from "react";
import "./App.css";
import AddArticle from "./components/AddArticle";
import AddCategory from "./components/AddCategory";
import ViewCategory from "./components/ViewCategory";
import ViewArticle from "./components/ViewArticle";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
import AddSubCategory from "./components/AddSubCategory";
import AddSubAdmin from "./components/AddSubAdmin";
import ViewSubAdmin from "./components/ViewSubAdmin";
import ShowArticle from "./components/ShowArticle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={AdminLogin}></Route>
          <Route exact path="/admin" component={AdminHome}></Route>
          <Route path="/admin/addarticle" component={AddArticle}></Route>
          <Route
            exact
            path="/admin/viewarticle"
            component={ViewArticle}
          ></Route>
          <Route path="/admin/addcategory" component={AddCategory}></Route>
          <Route path="/admin/viewcategory" component={ViewCategory}></Route>
          <Route path="/admin/addsubadmin" component={AddSubAdmin}></Route>
          <Route path="/admin/viewsubadmin" component={ViewSubAdmin}></Route>
          <Route
            path="/admin/addsubcategory"
            component={AddSubCategory}
          ></Route>
          <Route
            path="/admin/viewarticle/article/:id"
            component={ShowArticle}
          ></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
