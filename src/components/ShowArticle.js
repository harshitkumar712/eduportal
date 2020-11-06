import React from "react";
import ReactHtmlParser from "react-html-parser";
// import axios from 'axios';
// import qs from "qs";
const ShowArticle = (props) => {
	if(props.location.body){
    localStorage.setItem('article', props.location.body);
	return <div className=" container">{ReactHtmlParser(props.location.body)}</div>;
}
else{
   return <div className=" container">{ReactHtmlParser(localStorage.getItem('article'))}</div>;
}
};

export default ShowArticle;
