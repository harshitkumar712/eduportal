import React from "react";
import { Link } from "react-router-dom";
import "../styles/dropdown.css";
const DropdownData = [
	{ id: 1, subtitle: "Back to Home", path: "/admin" },
	{ id: 2, subtitle: "View Users", path: "/admin/viewuser" },
	{ id: 3, subtitle: "Add Sub Admin", path: "/admin/addsubadmin" },
	{ id: 3, subtitle: "View Sub Admin", path: "/admin/viewsubadmin" },
	{ id: 4, subtitle: "Add Category", path: "/admin/addcategory" },
	{ id: 4, subtitle: "View Category", path: "/admin/viewcategory" },
	{ id: 7, subtitle: "View Videos", path: "/admin/viewvideos" },
	{ id: 5, subtitle: "Add Article", path: "/admin/addarticle" },
	{ id: 5, subtitle: "View Article", path: "/admin/viewarticle" },
	
];

const Dropdown = ({ onclick,barid }) => {
	const dData = DropdownData.filter((item)=>barid===item.id).map((item, index) => {
		return (
			<div key={index} className="drop-text" onClick={onclick} >
				{/* <Link to={item.path}>{item.subtitle.toUpperCase()}</Link> */}
				<Link to={item.path}>{item.subtitle}</Link>
			</div>
		);
	});

	return <div className="drop-outer" >{dData}</div>;
};

export default Dropdown;
