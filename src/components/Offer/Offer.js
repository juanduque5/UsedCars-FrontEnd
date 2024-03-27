import React from 'react';
import chatIcon0 from '../../images/chat.png';
import chatIcon1 from '../../images/ticket.png';
import chatIcon2 from '../../images/funding.png';
import chatIcon3 from '../../images/bus.png';
import './Offer.css';

const Offer = () => {
  return (
    <div className="offer">
   
      <h3 className="offer-title">What do we offer?</h3>
      

      <section className="item-section">
        <div className="itemO">
         <img src={chatIcon0}  alt="Icono" className="icon" width="25px" height="25px"/>
         <h4 className="subname"> Consultation </h4>
         <p className="texto">You can call us anytime, we're going to ask every question you might have</p>
        </div>
        <div className="itemO">
         <img src={chatIcon1}  alt="Icono" className="icon2" width="25px" height="25px"/>
          <h4 className="subname">Purchase</h4>
         <p className="texto">You can call us anytime, we're going to ask every question you might have</p>
        </div>
        <div className="itemO">
        <img src={chatIcon2}  alt="Icono" className="icon3" width="25px" height="25px"/>
         <h4 className="subname"> Funding </h4>
         <p className="texto">You can call us anytime, we're going to ask every question you might have</p>
        </div>
        <div className="itemO">
        <img src={chatIcon3}  alt="Icono" className="icon4" width="25px" height="25px"/>
         <h4 className="subname"> Transportation</h4>
         <p className="texto">You can call us anytime, we're going to ask every question you might have</p>
        </div>
      </section>
    </div>
  );
}

export default Offer;
