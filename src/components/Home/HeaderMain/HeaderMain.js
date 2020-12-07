import React from 'react';
import group6 from '../../../images/group6.svg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
      <div  className="container header-main">
           <main style={{height:'550px'}} className="row d-flex align-items-center mb-5">
           <div className="col-md-7 pl-4">
                <span className="visual">Visualize Your Buisness</span><br/>
                <span className="visual">to World- Class</span>
                <p style={{fontSize:'22px',color:'#8B8B8B'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="hire-button">Hire Us</button>
           </div>
           <div className="col-sm-5 pl-2">
           <img src={group6}alt="" className="img-fluid"/>
           </div>

       </main>
      </div>
    );
};

export default HeaderMain;