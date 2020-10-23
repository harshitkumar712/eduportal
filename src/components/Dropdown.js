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
	{ id: 5, subtitle: "Add Sub-Category", path: "/admin/addsubcategory" },
	{ id: 7, subtitle: "View Videos", path: "/admin/viewvideos" },
	{ id: 6, subtitle: "Add Article", path: "/admin/addarticle" },
	{ id: 6, subtitle: "View Article", path: "/admin/viewarticle" },
];

const Dropdown = ({ onclick, barid }) => {
	const toggleHoverOn = (e) => {
		const focus = e.target.closest("a").querySelector(".circle");
		focus.classList.add("focus");
	};
	const toggleHoverOff = (e) => {
		const focus = e.target.closest("a").querySelector(".circle");
		focus.classList.remove("focus");
	};
	const dData = DropdownData.filter((item) => barid === item.id).map(
		(item, index) => {
			return (
				<Link
					to={item.path}
					onMouseEnter={toggleHoverOn}
					onMouseLeave={toggleHoverOff}
					key={index}
				>
					<div className="drop-text" onClick={onclick}>
						{/* <Link to={item.path}>{item.subtitle.toUpperCase()}</Link> */}

						<div className="drop-inner">{item.subtitle}</div>
						<div className="circle"> </div>
					</div>
				</Link>
			);
		}
	);

	return <div className="drop-outer">{dData}</div>;
};

export default Dropdown;
