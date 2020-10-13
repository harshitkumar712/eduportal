import React from 'react';

const ViewCategoryTable=({categoryData})=>{

const row = categoryData.map((item, index) => {
		return (
			<React.Fragment key={index}>
					<tr>
						<td>{item.userId}</td>
						<td>{item.id}</td>
						<td>{item.title}</td>
						<td>{item.body}</td>
						{/* <td>{item.auth}</td> */}
						{/* <td>{item.isReviewed}</td> */}
					</tr>
					</React.Fragment>
		);
	});

	return(
		<div>
			<table>
					<thead>
					<tr>
						<th>USERID</th>
						<th>ID</th>
						<th>TITLE</th>
						<th>POST</th>
						{/* <th>AUTHOR</th> */}
						{/* <th>IS REVIEWED</th> */}
					</tr></thead>
					<tbody>{row}</tbody>
				</table>
		</div>
		)
}
export default ViewCategoryTable;