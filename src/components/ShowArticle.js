import React from "react";
import ReactHtmlParser from "react-html-parser";
// import axios from 'axios';
// import qs from "qs";
const ShowArticle = (props) => {
	
	return <div className=" container">{ReactHtmlParser(props.location.body)}</div>;
};

export default ShowArticle;
