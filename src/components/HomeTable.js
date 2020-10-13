import React from "react";
import "../styles/hometable.css";

const TableData = [
	{ id: 1,category:'aiims', title: "Title 1", date: "10 Oct", auth: "Author 0",isReviewed:'true' },
	{ id: 2,category:'cpmt', title: "Title", date: "1 Oct", auth: "Author 1",isReviewed:'false' },
	{ id: 3,category:'jee', title: "Title", date: "10 Mar", auth: "Author 2",isReviewed:'false' },
	{ id: 4,category:'iit', title: "Title", date: "10 July", auth: "Author 3",isReviewed:'true' },
	{ id: 5,category:'medical', title: "Title", date: "10 Dec", auth: "Author 4",isReviewed:'true' },
];

const HomeTable = () => {
	const row = TableData.map((item, index) => {
		return (
			<React.Fragment key={index}>
					<tr>
						<td>{item.id}</td>
						<td>{item.category}</td>
						<td>{item.title}</td>
						<td>{item.date}</td>
						<td>{item.auth}</td>
						<td>{item.isReviewed}</td>
					</tr>
					</React.Fragment>
		);
	});

	return <div className="table-container ">
		<div  className="table-item ">
				<div className="table-header">Top Recent Articles</div>
				<table>
					<thead>
					<tr>
						<th>ID</th>
						<th>CATEGORY</th>
						<th>TITLE</th>
						<th>DATE</th>
						<th>AUTHOR</th>
						<th>IS REVIEWED</th>
					</tr></thead>
					<tbody>{row}</tbody>
				</table>
			</div>



	</div>;
};

export default HomeTable;
