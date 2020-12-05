import React from 'react';
import codixel from '../../../images/codixel.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light container">
  <a className="navbar-brand" href="#">
      <img src={codixel} alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
      </li>
      <li className="nav-item">
        <a style={{color:'#15DB91',fontSize:'18px'}}className="nav-link mr-5" href="#">Shop</a>
      </li>
      <li className="nav-item">
        <a style={{color:'#15DB91',fontSize:'18px'}}className="nav-link mr-5" href="#">Project</a>
      </li>
      <li className="nav-item">
        <a style={{color:'#15DB91',fontSize:'18px'}} className="nav-link mr-3 nav-item" href="#">Contact</a>
      </li>
      <li className="nav-item">
        <button className="navbar-button" >Get a Quote</button>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navbar;