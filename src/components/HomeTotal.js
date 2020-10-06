import React from "react";
import "../styles/hometotal.css";

const TotalData = [
	{ id: 1, title: "Total Articles", icon: "fas fa-globe-asia", count: "25" },
	{ id: 2, title: "Total Categories", icon: "fas fa-layer-group", count: "09" },
	{ id: 3, title: "Total Authors", icon: "fas fa-user-plus", count: "03" },
];

const HomeTotal = () => {
	const tData = TotalData.map((item, index) => {
		return (
			<div key={index} className="total-item">
				<div className="icon-container">
					<div><i className={item.icon}></i></div>
				</div>
				<div className="detail-container">
					<h2>{item.title}</h2>
					<p>{item.count}</p>
				</div>
			</div>
		);
	});

	return <div className="total-container">{tData}</div>;
};

export default HomeTotal;
