import React from 'react';
import group6 from '../../../images/group6.svg'

const OurWork = () => {
    return (
        <div style={{height:'611px'}}>
            <p className="text-center mt-5" style={{ fontSize: '40px' }}>Recent Work</p>
            <div className="d-flex justify-content-center align-items-center row">
                <div className="col-md-5">
                    <p style={{fontSize:'32px',color:'#15DB91'}}>Project Name</p>
                    <p style={{fontSize:'16px'}}>We understand the pain points and crate the best user friendly designs.We work with you to meet your buisness goals.</p>
                    <button className="hire-button">Live view</button>
                    <button className="hire-button" style={{marginLeft:'10px'}}>Details</button>
                </div>
                <div className="col-md-7">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={group6} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={group6}class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={group6} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;