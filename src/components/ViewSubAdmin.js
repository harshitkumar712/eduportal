import React from "react";
import Header from "./Header";
import "../styles/viewsubadmin.css";

const SubAdminData = [
	{
		id: 1,
		Name: "Rakesh",
		Email: "Email",
		date: "10 Oct",
	},
	{
		id: 2,
		Name: "Suresh",
		Email: "Email",
		date: "10 Oct",
	},
	{
		id: 3,
		Name: "Ram",
		Email: "Email",
		date: "10 Oct",
	},
	{
		id: 4,
		Name: "Aryan",
		Email: "Email",
		date: "10 Oct",
	},
	{
		id: 5,
		Name: "Raj",
		Email: "Email",
		date: "10 Oct",
	},
];
const ViewSubAdmin = (props) => {
	const row = SubAdminData.map((item, index) => {
		return (
			<React.Fragment key={index}>
				<tr>
					<td>{item.id}</td>
					<td>{item.Name}</td>
					<td>{item.Email}</td>
					<td>{item.date}</td>
				</tr>
			</React.Fragment>
		);
	});

	return (
		<div>
			<Header props={props} />
			<div className="viewsubadmin ">
				<div className='container-fluid'>
				<div className="table-item ">
					<div style={{ overflowX: "auto" }}>
						<table>
							<thead>
								<tr>
									<th>ID</th>
									<th>NAME</th>
									<th>EMAIL</th>
									<th>DATE</th>
								</tr>
							</thead>
							<tbody>{row}</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

export default ViewSubAdmin;
