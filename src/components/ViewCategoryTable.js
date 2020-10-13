import React from "react";

const ViewCategoryTable = ({ categoryData }) => {
	const row = categoryData.map((item, index) => {
		return (
			<React.Fragment key={index}>
				<tr>
					<td>{item.userId}</td>
					<td>{item.id}</td>
					<td>{item.id}</td>
					<td>{item.id}</td>
					<td>{item.id}</td>
					<td>{item.id}</td>
				</tr>
			</React.Fragment>
		);
	});

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>ID</th>

						<th>TITLE</th>
						<th>CATEGORY</th>
						<th>AUTHOR</th>
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
