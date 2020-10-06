import React from "react";
import { Link } from "react-router-dom";
import "../styles/dropdown.css";
const DropdownData = [
	{ id: 1, subtitle: "Add Category", path: "/admin/addcategory" },
	{ id: 2, subtitle: "Add Article", path: "/admin/addarticle" },
	{ id: 1, subtitle: "View Category", path: "/admin/viewcategory" },
	{ id: 2, subtitle: "View Article", path: "/admin/viewarticle" },
	{ id: 3, subtitle: "Add Content", path: "/admin/addarticle" },
	{ id: 3, subtitle: "View Content", path: "/admin/addarticle" },
];

const Dropdown = ({ onclick,barid }) => {
	const dData = DropdownData.filter((item)=>barid===item.id).map((item, index) => {
		return (
			<div key={index} className="drop-text" onClick={onclick} >
				<Link to={item.path}>&#8208;&nbsp;{item.subtitle.toUpperCase()}</Link>
			</div>
		);
	});

	return <div className="drop-outer" >{dData}</div>;
};

export default Dropdown;
