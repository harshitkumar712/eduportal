import React, { useState, useEffect } from "react";
import "../styles/menu.css";
import Dropdown from "./Dropdown";

const MenuData = [
	{ id: 1, title: "DASHBOARD", icon: "fas fa-home" },
	{ id: 2, title: "USER LIST", icon: "fas fa-users" },
	{ id: 3, title: "SUB ADMIN", icon: "fas fa-users" },
	{ id: 4, title: "CATEGORIES", icon: "fas fa-list" },
	{ id: 5, title: "SUB CATEGORIES", icon: "fas fa-list-alt" },
	{ id: 6, title: "ARTICLES", icon: "fas fa-bookmark" },
	{ id: 7, title: "VIDEOS", icon: "fas fa-video" },
	{ id: 8, title: "SUBCRIPTION", icon: "fas fa-calendar-plus" },
];

const Menu = ({ flag, onclick }) => {
	const [user, setUser] = useState("");
	useEffect(() => {
		setUser(localStorage.getItem("type"));
	}, []);
	const showDropdown = (e) => {
		// const drop = e.target.parentNode.querySelector(".drop");
		// const rotate = e.target.parentNode.querySelector(".angle");
		const drop = e.target.closest("li").querySelector(".drop");
		const rotate = e.target.closest("li").querySelector(".angle");
		drop.classList.toggle("active");
		rotate.classList.toggle("down");
	};
	const mData = MenuData.map((item, index) => {
		return (
			<li className="menu-text" key={index}>
				<div className="menu-div" onClick={showDropdown}>
					<i className={item.icon} style={{ float: "left" }}></i>
					{item.title}
					<i
						className="angle fas fa-angle-right"
						style={{ float: "right" }}
					></i>
				</div>
				<div className="drop">
					<Dropdown barid={item.id} />
				</div>
			</li>
		);
	});

	return (
		<div className={flag ? "menu active" : "menu"}>
			<ul className="menu-items">
				<li className="menu-header">
					<div className="menu-header-text">{user.toUpperCase()}</div>
					<div className="cross" onClick={onclick}>
						<i className="fas fa-times"></i>
					</div>
				</li>
				{mData}
			</ul>
		</div>
	);
};

export default Menu;
