import React from "react";
import "../styles/menu.css";
import Dropdown from "./Dropdown";

const MenuData = [
	{ id: 1, title: "DASHBOARD",icon:'fas fa-home'},
	{ id: 2, title: "USER LIST",icon:'fas fa-users' },
	{ id: 3, title: "SUB ADMIN",icon:'fas fa-users' },
	{ id: 4, title: "CATEGORIES",icon:'fas fa-list' },
	{ id: 5, title: "SUB CATEGORIES",icon:'fas fa-list-alt' },
	{ id: 6, title: "VIDEOS",icon:'fas fa-video' },
	{ id: 7, title: "SUBCRIPTION",icon:'fas fa-calendar-plus' },
	{ id: 8, title: "ARTICLES",icon:'fas fa-bookmark' },
];

const Menu = ({flag}) => {
	const showDropdown = (e) => {
		const drop = e.target.querySelector(".drop");
		const rotate = e.target.querySelector(".angle");
		drop.classList.toggle("active");
		rotate.classList.toggle("down");
	};
	const mData = MenuData.map((item, index) => {
		return (
			<li className="menu-text" key={index}>
				<div className="menu-div" onClick={showDropdown}   >
					<i
						className={item.icon}
						onClick={(e) => e.stopPropagation()} style={{float:'left'}}
					></i>
					{item.title}<i
						className="angle fas fa-angle-right"
						onClick={(e) => e.stopPropagation()} style={{float:'right'}}
					></i>
					<div onClick={(e) => e.stopPropagation()} className="drop">
						<Dropdown barid={item.id} />
					</div>
				</div>
			</li>
		);
	});

	return (
		<div className={flag?'menu active':'menu'}>
			<ul className="menu-items">
				<li className="menu-header">
					{/* <a to="#" className="cross"> */}
					{/* 	<i className="fas fa-times"></i> */}
					{/* </a> */}
					ADMIN
				</li>
				{mData}
			</ul>
		</div>
	);
};

export default Menu;
