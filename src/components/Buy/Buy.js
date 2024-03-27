import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Buy.css';
import searchIcon from '../../images/search-buy.png'; 
import filterIcon from '../../images/filters.png';
import arrowIcon from '../../images/arrow.png'; 
import infoLogo from '../../images/chat.png';
import saveLogo from '../../images/save.png';
//import { useLocation } from 'react-router-dom';

const Buy = ({ infoCars }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [is1, setIs1] = useState(false);
  const [is2, setIs2] = useState(false);
  const [is3, setIs3] = useState(false);
  const [is4, setIs4] = useState(false);
  const [is5, setIs5] = useState(false);
  const [is6, setIs6] = useState(false);
  
  const itemsPerPage = 8;
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = infoCars.slice(firstItem, lastItem);
  const totalPages = Math.ceil(infoCars.length / itemsPerPage);
  const navigate = useNavigate();
  
  let numbers = [];
  for (var i = 1; i <= totalPages; i++) {
    numbers.push(i);
  }  

  const nextPage = (number) => {
    setCurrentPage(number);
    window.scrollTo(0, 0);
    //window.location.reload();
    
  }

  const handleClick = () => {
    setIs1(!is1);
  };

  const handleClick2 = () => {
    setIs2(!is2);
  };

   const handleClick3 = () => {
    setIs3(!is3);
  };

  const handleClick4 = () => {
    setIs4(!is4);
  };

  const handleClick5 = () => {
    setIs5(!is5);
  };

  const handleClick6 = () => {
    setIs6(!is6);
  };

  const getId = (price, make, year, image, description) => {
    console.log(price);
    console.log(make);
    console.log(year);
    navigate('/Cardata', { state: { price, make, year, image, description}});
      
  }

 

  return (
    <div className="buy">
      <div className="buy-top">
        <div className="buy-topInfo">
          <p className="buy-p"> <a className="news-a" href="/"> Home </a>/ Buy </p>
          <h2> Collection </h2>
          <input placeholder="Search..." className="buy-search" type="text-2" /> 
          <img src={searchIcon} alt="Search" className="icon-search" />
        </div>
      </div>
      <div className="icon-fil">
        <img src={filterIcon} alt="Search" className="icon-filters" width="auto" height="auto" />
      </div>
      <div className="buy-container">
        <div className="buy-filters">

          <div className="filter-box" onClick={handleClick}>
            <div className='p-filter'>
              <h3>Make</h3>
            </div>
            <div className='p-filter'>
                <img className={`rotate ${is1 ? 'clicked':'clicked2'}`} src={arrowIcon} alt='arrow' width="auto" height="20px"/>
            </div>
          </div>

          {is1 && 
            <div className="expanded">
              Contenido expandido
            </div>
          }

          <div className="filter-box" onClick={handleClick2}>
          <div className='p-filter'>
              <h3>Year</h3>
            </div>
            <div className='p-filter'>
                <img className={`rotate ${is2 ? 'clicked':'clicked2'}`} src={arrowIcon} alt='arrow' width="auto" height="20px"/>
            </div>
          </div>

          {is2 && 
            <div className="expanded">
              Contenido expandido
            </div>
          }

          <div className="filter-box" onClick={handleClick3}>
            <div className='p-filter'>
                <h3>Price</h3>
            </div>
            <div className='p-filter'>
               <img className={`rotate ${is3 ? 'clicked':'clicked2'}`} src={arrowIcon} alt='arrow' width="auto" height="20px"/>
            </div>
          </div>

          {is3 && 
            <div className="expanded">
              Contenido expandido
            </div>
          }

          <div className="filter-box" onClick={handleClick4}>
            <div className='p-filter'>
                <h3>Color</h3>
            </div>
            <div className='p-filter'>
               <img className={`rotate ${is4 ? 'clicked':'clicked2'}`} src={arrowIcon} alt='arrow' width="auto" height="20px"/>
            </div>
          </div>

          {is4 && 
            <div className="expanded">
             expanded
            </div>
          }

          <div className="filter-box" onClick={handleClick5}>
            <div className='p-filter'>
              <h3>Milage</h3>
            </div>
            <div className='p-filter'>
                <img className={`rotate ${is5 ? 'clicked':'clicked2'}`} src={arrowIcon} alt='arrow' width="auto" height="20px"/>
            </div>
          </div>

          {is5 && 
            <div className="expanded">
              Contenido expandido
            </div>
          }

          <div className="filter-box" onClick={handleClick6}>
            <div className='p-filter'>
               <h3>Model</h3>
            </div>
            <div className='p-filter'>
              <img className={`rotate ${is6 ? 'clicked':'clicked2'}`} src={arrowIcon} alt='arrow' width="auto" height="20px"/>
            </div>
          </div>

          {is6 && 
            <div className="expanded">
              Contenido expandido
            </div>
          }
        </div>

        <div className="buy-cars">
          {currentItems.map((info) => (
            <div onClick={() => getId(info.price, info.make, info.year, info.image, info.description)}  className="buy-items" key={info.id}>
              <div className='img'>
              <img className='img2' src={`http://localhost:2001/${info.image}`} alt='' />
               
              </div>
              <div className='description'>
                <div className='price-description'> 
                  <div className='arriba'> 
                    <div className='used'>
                      <p>Used</p>
                    </div>
                    <div className='saved'>
                      <img src={saveLogo}  alt="Icono" className="saveLogo" width="19px" height="19px"/>
                      <p className='save-p'>save</p>
                    </div>
                  </div>
                  <div className='medio'> 
                  <a className='car-description' href="https://www.google.com"> {info.year}, {info.make} {info.description}</a>
                  
                  </div>
                  <div className='abajo'> 
                      <span className='primary-price'>
                        ${info.price}
                      </span> 
                      <span className='secondary-price'>
                        MSRP ${info.price}
                      </span>
                  </div>
                </div>
                <div className='check-description'> 
                  <div className='check1'> 
                    <div className='estrellas'>
                       <img src={infoLogo}  alt="Icono" className="infoLogo" width="25px" height="25px"/>
                     </div>

                      <div class="star-rating">
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9734;</span>
                      </div>
                  </div>
                  <div className='check2'> 
                  <button className='available'>Check Abailability</button>
                  </div>
                </div>    
              </div>
            </div>
          ))}
        </div>
              
     
      </div>
      <div className="row-container">
        {numbers.map((number) => (
          <div className="row" onClick={() => nextPage(number)} key={number}
          style={{ backgroundColor: currentPage === number ? '#f1f1f1' : 'transparent' }}
          >
            <p>{number}</p>
          </div>
        ))}
      </div>
 
    </div> 
  );
}

export default Buy;
