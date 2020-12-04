import React from 'react';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 d-flex align-items-center justify-content-center info-card">
            <div>
            <img src={info.icon} alt=""/>
            </div>
         <div>
         <h6 style={{fontSize:'22px'}}>{info.numbers}</h6>
    <small style={{fontSize:'15px'}}>{info.title}</small>
    
         </div>
        </div>
    );
};

export default InfoCard;