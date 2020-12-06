import React from 'react';
import facebook from '../../../images/facebook.svg';
import instagram from '../../../images/instagram.svg';
import linkdin from '../../../images/linkdin.svg';
import demologo from '../../../images/demologo.svg';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{marginTop:'100px'}}>
          <footer>
              <div className="container-lg">
                <div className="footer-top">
                    <ul className="list-group list-group-horizontal flex-wrap justify-content-center">
                        <li className="list-group-item">
                            <a href="#">Peach Your Lease</a>
                        </li>
                        <li className="list-group-item" className="list-group-item">
                            <a href="#">Browse Apartments</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Contact Us</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">FAQ</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Sign Up</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Login</a>
                        </li>
                    </ul>
                    <ul className="list-group list-group-horizontal flex-wrap justify-content-center">
                        <li className="list-group-item">
                            <a href="#">
                            <img src={facebook} alt=""/>
                            </a>
                        </li>
                        <li className="list-group-item">
                           <a href="#">
                           <img src={linkdin} alt=""/>
                           </a>
                        </li>
                        <li className="list-group-item">
                           <a href="#">
                           <img src={instagram} alt=""/>
                           </a>
                        </li>
                    </ul>
                </div>
                <div className="copy-right-section flex-lg-row flex-column">
                    <div className="px-2 mb-lg-0 mb-3 order-lg-0 order-0">
                        <a href="/">
                            <img src={demologo} alt="codixel" className="img-fluid"/>
                        </a>
                    </div>
                    <div className="px-2 mt-lg-0 mt-3 order-lg-1 order-2 copy-right-text">
                        copyright &copy; CodiXel 2020.
                    </div>
                    <ul className="list-group list-group-horizontal flex-wrap justify-content-center order-lg-2 order-1">
                        <li className="list-group-item">
                            <a href="#">Terms of service</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Privacy poclicy</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Accessibility statement</a>
                        </li>
                    </ul>    
                </div>
              </div>
          </footer>
        </div>
    );
};

export default Footer;