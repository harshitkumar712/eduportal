import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import axios from 'axios';
import qs from "qs";
const ShowArticle = (props) => {
	const [article, setArticle] = useState("");
	useEffect(() => {
		const data = {
			artId:props.match.params.id,
		}
   
		axios({
			method: "post",
			url: 'http://192.187.126.18:8082/home/viewArticle',
			data: qs.stringify(data),
			// url: "http://192.187.126.18:8082/home/viewArticle",
		}).then((result) => {
			console.log(result);
			setArticle(result.data.Data.body);
		});
	}, []);

	

	return <div className=" container">{ReactHtmlParser(article)}</div>;
};

export default ShowArticle;
