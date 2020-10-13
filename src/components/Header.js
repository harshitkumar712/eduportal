import React, { useState } from "react";
import "../styles/header.css";
import Menu from "./Menu";
const Header = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<div>
			<div className="header">
				<div className="bars" onClick={showSidebar}>
					<i className="fas fa-bars"></i>
				</div>
				<div className="logout-container">
					<i className="fas fa-sign-out-alt sign-out"></i>
					<div className="logout-text">LOGOUT</div>
				</div>
				
			</div>
			<Menu flag={sidebar} onclick={showSidebar} />
		</div>
	);
};

export default Header;
