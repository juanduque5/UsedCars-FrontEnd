import React from 'react';
import './Footer.css';
import chatIcon1 from '../../images/facebook.png';
import chatIcon2 from '../../images/instagram.png';
import chatIcon3 from '../../images/telegram.png';

const Footer = () => {
  return (
    <div className="footer">
       <div className="media">
        <img src={chatIcon1}  alt="Icono" className="icon-footer1" width="25px" height="25px"/>

       </div>
       <div className="media">
        <img src={chatIcon2}  alt="Icono" className="icon-footer1" width="25px" height="25px"/>

       </div>
       <div className="media">
        <img src={chatIcon3}  alt="Icono" className="icon-footer1" width="25px" height="25px"/>

       </div>
    </div>
  );
}

export default Footer;