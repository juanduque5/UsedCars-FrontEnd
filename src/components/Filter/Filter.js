import React from 'react';
import './Filter.css';

const Filter = () =>{

	return(
<div className="container2">
  <section className="first">
	    <select className="select">
	      <option value="volvo">Volvo</option>
	      <option value="saab">Saab</option>
	      <option value="mercedes">Mercedes</option>
	      <option value="audi">Audi</option>
	    </select>
	  

	    <select className="select">
	      <option value="volvo">Volvo</option>
	      <option value="saab">Saab</option>
	      <option value="mercedes">Mercedes</option>
	      <option value="audi">Audi</option>
	    </select>
	

	    <select className="select">
	      <option value="volvo">Volvo</option>
	      <option value="saab">Saab</option>
	      <option value="mercedes">Mercedes</option>
	      <option value="audi">Audi</option>
	    </select>
	</section>

 <section className="second">
	    

	    <div className="input-price">
		<input type="text" id="name" name="name" required
       minLength="4" maxLength="8" size="10" placeholder="Price from"/>
	  <input type="text" id="name" name="name" required
       minLength="4" maxLength="8" size="10" placeholder=" To"/>
        <span className="currency">$</span>
       </div>
	  

	
	    <select className="select">
	      <option value="volvo">Volvo</option>
	      <option value="saab">Saab</option>
	      <option value="mercedes">Mercedes</option>
	      <option value="audi">Audi</option>
	    </select>
	  

	
	    <select className="select">
	      <option value="volvo">Volvo</option>
	      <option value="saab">Saab</option>
	      <option value="mercedes">Mercedes</option>
	      <option value="audi">Audi</option>
	    </select>

	</section>

	<section className="btn-f">
		<button className="btn-filter"> Submit </button>
	</section>
</div>


	);
}

export default Filter; 