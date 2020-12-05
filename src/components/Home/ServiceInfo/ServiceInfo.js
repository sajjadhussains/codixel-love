import React from 'react';
import './ServiceInfo.css';

const ServiceInfo = ({service}) => {
    return (
        <div className="col-md-5 service-info">
         <div className={`d-flex align-items-center justify-content-center service-${service.border}`}>
         <div className="row">
              <div className="col-9" style={{paddingLeft:'35px'}}>
                <h2 style={{fontSize:'24px',fontWeight:'bold'}}>{service.title}</h2>
                <p style={{color:'#7D7D7D'}}>{service.description}</p>
              </div>
              <div className="col-3 round-button-div">
                   <button className="round-button"></button> 
              </div>
          </div>
         </div>
        </div>
    );
};

export default ServiceInfo;