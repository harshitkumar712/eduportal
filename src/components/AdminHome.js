import React from "react";
import HomeTotal from "./HomeTotal";
import HomeTable from "./HomeTable";
import "../styles/adminhome.css"

const AdminHome = () => {
	return (
		<div className="adminhome">
		<div className="container">
			<HomeTotal/>
			<HomeTable/>
		</div>
		</div>
	);
};

export default AdminHome;
