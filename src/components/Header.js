import React, { useState } from "react";
import "../styles/header.css";
import Menu from "./Menu";
import Modal from './Modal';
const Header = ({ props }) => {
	const [sidebar, setSidebar] = useState(false);
    const [modal,setModal]= useState(false);

	const showSidebar = () => {
		
		setSidebar(!sidebar);
}
	const handleLogout = () => {
		setModal(!modal);
		
	};

const handleModal=()=>{
	localStorage.clear();
		props.history.push("/");
}

	return (
		<div>
			<div className="header">
				<div className="bars" onClick={showSidebar}>
					<i className="fas fa-bars"></i>
				</div>
				<div className="home" onClick={()=>props.history.push("/admin")}>
					<i className="fas fa-home"></i>
				</div>
				<div className="logout-container" onClick={handleLogout}>
					<i className="fas fa-sign-out-alt sign-out"></i>
					<div className="logout-text">LOGOUT</div>
				</div>
			</div>
			<Menu props={props} flag={sidebar} onclick={showSidebar} />
            <Modal open={modal} close={()=>setModal(false)}>

            	Are you sure you want to logout<br/>
            	<button onClick={handleModal}>LOGOUT</button>
            </Modal>
		</div>
	);
};

export default Header;
