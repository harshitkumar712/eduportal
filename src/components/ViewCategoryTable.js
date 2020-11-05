import React from "react";
import Loader from "react-loader-spinner";

const ViewCategoryTable = ({ categoryData, loading }) => {
	const row = loading ? (
		categoryData.length ? (
			categoryData.map((item, index) => {
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
			})
		) : (
			<tr>
				<td colSpan="6">No results found</td>
			</tr>
		)
	) : (
		<tr>
			<td colSpan="6">
				<Loader
					type="ThreeDots"
					color="#A81838"
					height={40}
					width={40}
				/>
			</td>
		</tr>
	);

	return (
		<div style={{ overflowX: "auto" }}>
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
