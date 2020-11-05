import React from "react";
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner';
const ViewArticleTable = ({ articleData, loading }) => {
	const row = loading ? (
		articleData.length ? (
		articleData.map((item, index) => {
			return (
				<React.Fragment key={index}>
					<tr>
						<td>{item.artId}</td>
						<td>{item.title}</td>
						<td>{item.description}</td>
						<td>{item.author}</td>
						<td>{item.date}</td>
						<td>
							<Link
								to={{
									pathname: `/admin/viewarticle/article`,

									body: item.body,
								}}
							>
								view
							</Link>
							/
							<Link
								to={{
									pathname: `/admin/viewarticle/article`,

									body: item.body,
								}}
								// target="_blank"
							>
								edit
							</Link>
						</td>
					</tr>
				</React.Fragment>
			);
		})
		): (
			<tr>
				<td colSpan="6">No results found</td>
			</tr>
		)
	) : (
		<tr>
			<td colSpan="6">
			<Loader type="ThreeDots" color="#A81838" height={40} width={40} /></td>
		</tr>
	);

	return (
		<div style={{ overflowX: "auto" }}>
			<table>
				<thead>
					<tr>
						<th>ID</th>

						<th>TITLE</th>
						<th>DESCRIPTION</th>
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
export default ViewArticleTable;
