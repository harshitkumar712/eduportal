import React from 'react';

const Pagination=({perPage,totalLength,paginate,currentPage})=>{
  const pageNumbers=[];

  for(let i=1;i<=Math.ceil(totalLength/perPage);i++){
  	pageNumbers.push(i);
  }


	return(
<div>
	<nav>
		<ul className="pagination">
			{pageNumbers.map((number)=>(

				<li style={{cursor:'pointer'}} key={number} className="page-item"><button onClick={()=>paginate(number)} className="page-link">{number} </button> </li>
				))}
		</ul>
	</nav>
</div>
		)
}

export default Pagination;