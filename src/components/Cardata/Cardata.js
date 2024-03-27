import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import './Cardata.css';
import saveLogo from '../../images/save.png';
import ads2 from '../../images/ads2.png';
import ads from '../../images/ads.png';

const Cardata = ({infoCars}) => {
   // ERROR En las stars PORQUE ESTAS UTILIZANDO CLASS NOT className


   //const [currentPage, setCurrentPage] = useState(1);
   const location = useLocation();
   const { state } = location;
   const { price, make, year, image, description } = state;

   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when the component is mounted
    }, []);


    //Navigation for cars
   //  const itemsPerPage = 4;
   //  const lastItem = currentPage * itemsPerPage;
   //  const firstItem = lastItem - itemsPerPage;
   
   //  const totalPages = Math.ceil(infoCars.length / itemsPerPage);
   // console.log('current->', currentItems);
   // console.log('totalPages->', totalPages);

   const similarCars = infoCars.filter((car) => {
   
      return car.make === make && car.description !== description;
    });
   
    console.log('Similar Cars', similarCars);
    
//   if(similarCars.length === 4){
//    console.log('si');
//   } else {
//     console.log('ohh nooo');
//   }



 return (
   <div className='Cardata'>
      <div className='Cardata-top'>
         <div className='Cardata-top-path'>
            <a className='path'  href='/'>Home </a> <span className='slash'> / </span> <a className='path'  href='/buy'>Cars for Sale </a> <span className='slash'> / </span> <a className='path'  href='Cardata'>Search Results </a> <span className='slash'> / </span>  <a className='make' href=' '>{year} {make}</a>
         </div>
      </div>
  
      <div className='Cardata-half'>
         <div className='Cardata-half-data'>
            <div className='data-picture'>
               <img className='data-image' src={`http://localhost:2001/${image}`} alt='' />
            </div>
            <div className='data-normal'>
               <div className='data-normal-make'>
                  <div className='data-normal-make1'>
                     <h3>{year}, {make}  {description}</h3>
                  </div>
                  <div className='data-normal-make2'>
                     <img src={saveLogo}  alt="Icono" className="saveLogo2" width="19px" height="19px"/>
                  </div>
               </div>
               <div className='data-normal-price'>
                  <h2 className='data-normal-price2'>${price}</h2>
               </div>
               <div className='data-normal-rating'>
                   <div class="star-rating2">
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9733;</span>
                        <span class="star">&#9734;</span>
                   </div>
               </div>
            </div>  
            <div className='data-normal2'>
               <div className='data-name'>
                  <h1 className='data-name-p'> Basics</h1>
               </div>
              
               <dl className='data-dl'>
           
                  <dt>Term 1</dt>
                  <dd>Description 2</dd>
                  
                  <dt>Term 2</dt>
                  <dd>Description 1</dd>

                  <dt>Term 2</dt>
                  <dd>Description 1</dd>
                   <dt>Term 2</dt>
                  <dd>Description 1</dd>
                  <dt>Term 2</dt>
                  <dd>Description 1</dd>
               </dl>
            </div>   
         </div>
         <div className='Cardata-half-contact'>
           <div className='contact-input-title'>
               <h1>Contact seller</h1>
           </div>
           <div className='contact-input-number'>
               <p>Call (415) 416-8295</p>
           </div>
           <div className='contact-input-name'>
               <div className='contact-input-first'>
                  <input   id="fname" name="fname" placeholder='  First name'/>
               </div>
               <div className='contact-input-last'>
                  <input   id="fname" name="fname" placeholder='  Last name'/>
               </div>
           </div>
           <div className='contact-input-name'>
               <div className='contact-input-first'>
                  <input   id="fname" name="fname" placeholder='  Email'/>
               </div>
               <div className='contact-input-last'>
                  <input   id="fname" name="fname" placeholder='  Phone'/>
               </div>
           </div>
           <div className='contact-input-option'>  
            <select>
               <option value="opcion1">Opción 1</option>
               <option value="opcion2">Opción 2</option>
               <option value="opcion3">Opción 3</option>
            </select>
            <div className='contact-input-comments'>
               <textarea  className='subject' name="subject" placeholder="Write something.." style={{ height: "160px" }}></textarea>
            </div>
            <div className='contact-submit-button'>
               <button>Submit</button>
            </div>
            <div className='contact-privacy'>
               <p>By clicking here, you authorize Cars.com and its sellers/partners to contact you by text/calls which may include marketing and be by autodialer. Calls may be prerecorded. You also agree to our Privacy Notice. Consent is not required to purchase goods/services.</p>
            </div>
           </div>
         </div>
      </div>


      <div className='Cardata-question'>
         <div className='question'>
            <div className='question-name'>
               <h2> Have a question ?</h2>
            </div>
            <div className='question-text'>
               <p className='question-text-p'> Get answers, see the car, or find a good time for a test drive. Take the next step and contact the seller.</p>
            </div>
            <div className='question-button'>
               <button className='question-button-button'>Click now</button>
            </div>  
         </div>
         <div className='question-two'>
            <img src={ads2} alt='ads'></img>
         </div>
      </div>

      <div className='Cardata-reviews'>
         <div className='reviews'>
           <div className='reviews-name'>
               <h2>Consumer reviews </h2>
           </div>
           
           <div className='reviews-rating'>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9734;</span>
           </div>
           <div className='reviews-rating-porcentage'>
               <p className='reviews-rating-porcentage-p'>100% of drivers recommend this car </p>
           </div>  
           <div className='reviews-breakdowns'>
               <div className='reviews-breakdowns-title'>
                  <p>Rating breakdown (out of 5):</p>
               </div>
               <div className='reviews-breakdowns-data'>
                  <dl className='reviews-breakdowns-data-dl'>
                     <dt>Term 1</dt>
                     <dd>Description 2</dd>
                     
                     <dt>Term 2</dt>
                     <dd>Description 1</dd>

                     <dt>Term 2</dt>
                     <dd>Description 1</dd>
                        <dt>Term 2</dt>
                     <dd>Description 1</dd>
                     <dt>Term 2</dt>
                     <dd>Description 1</dd>
                  </dl>
               </div>
           </div> 
           <div className='reviews-leave'>
             <button className='reviews-leave-button'>Leave a review</button>
           </div>
         </div>
         <div className='reviews-ads'>
         <img src={ads} alt='ads' height='500px' width='auto'></img>
         </div>
      </div> 


      <div className='Cardata-consumer-reviews'>
         <div className='consumer-reviews-title'>
            <h2>Most recent consumer reviews</h2>
         </div>

         <div className='consumer-reviews-comment'>
            <div className='consumer-reviews-rating'>
           
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9734;</span>
          
            </div>
            <div className='consumer-reviews-info'>
               <p>June 4, 2023 <br/> By Pablo from Midland MI </p>
            </div>
            <div className='consumer-reviews-review'>
               <p>I just leased my fourth Equinox. That's probably the best recommendation I can give it. Very few problems and none that weren't taken care of right away.</p>
            </div>
         </div>
         
         <div className='consumer-reviews-comment'>
            <div className='consumer-reviews-rating'>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9734;</span>
          
            </div>
            <div className='consumer-reviews-info'>
               <p>June 4, 2023 <br/> By Pablo from Midland MI </p>
            </div>
            <div className='consumer-reviews-review'>
                <p>I just leased my fourth Equinox. That's probably the best recommendation I can give it. Very few problems and none that weren't taken care of right away.</p>
            </div>
         </div>
         
         <div className='consumer-reviews-comment'>
            <div className='consumer-reviews-rating'>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9733;</span>
               <span class="star">&#9734;</span>
            </div>
            <div className='consumer-reviews-info'>
                <p>June 4, 2023 <br/> By Pablo from Midland MI </p>
            </div>
            <div className='consumer-reviews-review'>
                <p>I just leased my fourth Equinox. That's probably the best recommendation I can give it. Very few problems and none that weren't taken care of right away.</p>
            </div>
         </div>
      </div>


      {/* This is returning similar cars */}  

      <div className='Cardata-similar-cars'>
         {similarCars.map((infoC) => (
         <div key={infoC.id} className='similar-cars'>
            <img className='img2' src={`http://localhost:2001/${infoC.image}`} alt='' />
         </div>        
      ))}
      </div>
   




   </div>
 )
 }
export default Cardata;
