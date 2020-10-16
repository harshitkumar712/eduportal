import React from "react";
import HomeTotal from "./HomeTotal";
import HomeTable from "./HomeTable";
import Header from "./Header";
import "../styles/adminhome.css";

const AdminHome = (props) => {
	return (
		<div>
			<Header props={props} />
			<div className="adminhome">
				<div className="container">
					<HomeTotal />
					<HomeTable />
				</div>
			</div>
		</div>
	);
};

export default AdminHome;
