import React from 'react';
import './News.css';


const News = () => {
  return (
    <div className="news">
     <div className="news-1">
      <div className="news-info">
        <p className="news-p"> <a className="news-a" href="/"> Home </a>/ News </p>
        <h2> News </h2>
        <p style={{display: 'flex', alignSelf: 'flex-start'}}> The latest news will be display here, everything you need to know about cars </p>
      </div>
      </div>

      <div className="container-news">
       <div className="big-new">
          <p> big new </p>
       </div>
       <div className="small-new">
          <div className="small-box">
              <p> small new </p>
          </div>
           <div className="small-box">
              <p> small new </p>
          </div>
           <div className="small-box">
              <p> small new </p>
          </div>
           <div className="small-box">
              <p> small new </p>
          </div>
       </div>
      </div>

      <section>
        <div className="container-news2">
          <div className="big-new2">
           <div className="big-box">
              <p> big-box </p>
           </div>
           <div className="big-box">
              <p> big-box </p>
           </div>
           <div className="big-box">
              <p> big-box </p>
           </div>
           <div className="big-box">
              <p> big-box </p>
           </div>
           <div className="big-box">
              <p> big-box </p>
           </div>
           <div className="big-box">
              <p> big-box </p>
           </div>
       </div>
       <div className="small-new">
          <div className="small-box">
              <p> small new </p>
          </div>
           <div className="small-box">
              <p> small new </p>
          </div>
           <div className="small-box">
              <p> small new </p>
          </div>
           <div className="small-box">
              <p> small new </p>
          </div>
       </div>
       </div>
      </section>
    </div>
  );
};

export default News;
