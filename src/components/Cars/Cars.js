import React, { useState } from 'react';
import './Cars.css';

const Cars = ({ infoCars }) => {
	const [currentPage, setCurrentPage] = useState(1);
	//items per page
	const itemsPerPage = 8;
	//calculating index of first and last item
	const lastItem = currentPage * itemsPerPage;
	const firstItem = lastItem  - itemsPerPage;
  const currentItems = infoCars.slice(firstItem, lastItem);
  //total pages
  const totalPages = Math.ceil(infoCars.length / itemsPerPage);

  //Click prev page
	const prevPage = () => {
		setCurrentPage((currentPage) => currentPage - 1);
	}

	//Click next page
	const nextPage = () => {
		setCurrentPage((currentPage) => currentPage + 1);
	}


 

  return (
    <div className="container-cars">
      <h3 className="car-title">List of cars available</h3>
      <section className="section-cars">
      {/*map currrentItems*/}
        {currentItems.map((info) => (
          <div className="car-item" key={info.id}>
			{/* <img className='img2' src={`http://localhost:2001/${info.image}`} alt='' /> */}
            {/* <h5>{info.make}, {info.year}</h5> */}
            {/*<h5>{info.price} </h5>*/}

			<div className='car-itemT'>
				<img className='img2' src={`http://localhost:2001/${info.image}`} alt='' />
			</div>
			
			<div className='car-itemB'>
				<div className='itemB1'>
					<h5 className='itemB1-h5'> {info.year}, {info.make} {info.description} </h5>
				</div>
				<div className='itemB2'>
					<span className='itemB2-price'>${info.price}</span> <span className='itemB2-MSRP'>MSRP ${info.price}</span>
				</div>
				<div className='itemB3'>
					<button className='itemB3-button'>
						Buy now
					</button>
				</div>
			</div>
          </div>
        ))}
      </section>

      	
      	<div className="pagination">
	        <button className="pagination-btn"
	         disabled={currentPage === 1}
  				 onClick = {prevPage}
	        >

	        &#8249;
	        </button>
	        <button 
	        className="pagination-btn"
	        disabled={currentPage === totalPages}
	         onClick = {nextPage}
	        >

	        &#8250;
	        </button>
      	</div>
     </div>
  );
}

export default Cars;
