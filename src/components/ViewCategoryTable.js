import React from "react";

const ViewCategoryTable = ({ categoryData,loading }) => {

	const row = loading? categoryData.map((item, index) => {
		return (
			<React.Fragment key={index}>
				<tr>
					<td>{item.catId}</td>
					<td>{item.name}</td>
					
					<td>{item.author}</td>
					<td>{item.description}</td>
					<td>{item.date}</td>
					<td>{item.lid}</td>
				</tr>
			</React.Fragment>
		);
	}):<tr><td colSpan="6">LOADING</td></tr>;

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>ID</th>

						
						<th>CATEGORY</th>
						<th>AUTHOR</th>
						<th>DESCRIPTION</th>
						<th>DATE</th>
						<th>ACTION</th>
					</tr>
				</thead>
				<tbody>{row}</tbody>
			</table>
		</div>
	);
};
export default ViewCategoryTable;
