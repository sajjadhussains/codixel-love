import React from 'react';
import mainpic from '../../../images/mainpic.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
       <main style={{height:'465px',marginTop:''}}className="row d-flex align-items-center">
           <div className="col-md-7 hire-section">
                <span className="visual">Visualize Your Buisness</span><br/>
                <span className="visual">to World- Class</span>
                <p style={{fontSize:'17px',color:'#8B8B8B'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className="hire-button">Hire Us</button>
           </div>
           <div className="col-md-5 pl-20">
              <img src={mainpic} alt="" className="img-fluid w-75 "/>
           </div>

       </main>
    );
};

export default HeaderMain;