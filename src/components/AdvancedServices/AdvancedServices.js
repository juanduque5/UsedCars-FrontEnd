import React from 'react';
import './AdvancedServices.css';
import chatIcon1 from '../../images/bus2.png';
import chatIcon2 from '../../images/user.png';
import chatIcon3 from '../../images/sale.png';

const AdvancedServices = () =>{
	return(
  <div className="Advanced">
  <h2 className="tittle-advanced">Advanced services</h2>

	  <div className="container-advanced">
		  <div className="items-advanced">
		  	<img src={chatIcon1}  alt="Icono" className="icon-advanced1" width="25px" height="25px"/>
		  	<h4> Evacuator service </h4>
        <p> You can call us anytime, we're going to ask every question you might have </p>
		  </div>
		  <div className="items-advanced">
		  	<img src={chatIcon2}  alt="Icono" className="icon-advanced2" width="25px" height="25px"/>
		  	<h4> For a dealer registration </h4>
		  	<p> You can call us anytime, we're going to ask every question you might have </p>
		  </div>
		  <div className="items-advanced">
		  	<img src={chatIcon3}  alt="Icono" className="icon-advanced3" width="25px" height="25px"/>
      	<h4> Sale registration </h4>
      	<p> You can call us anytime, we're going to ask every question you might have </p>
		  </div>
	  </div>
  </div>
  	
 
	);
}

export default AdvancedServices;
