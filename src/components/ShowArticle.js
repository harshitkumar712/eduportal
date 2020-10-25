import React from "react";
import ReactHtmlParser from 'react-html-parser';	
const ShowArticle = (props) => {

	const s = props.location.body;
	
	return(
	 <div className=" container">
{	ReactHtmlParser(s)	}
	</div>
	)
};

export default ShowArticle;
