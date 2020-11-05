import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/modal.css';


const Modal=({open,children,close})=>{
    if(!open) return null

	return ReactDOM.createPortal(
		<div  className="modal-container"  onClick={close} >
  <div className="modal-inner" onClick={(e)=>e.stopPropagation()}>
    <span onClick={close} className="close">&times;</span>
    <p>{children}</p>
  </div>

</div>,
		document.querySelector('#modal')
		)
}

export default Modal;


 