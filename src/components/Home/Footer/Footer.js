import React from 'react';
import facebook from '../../../images/facebook.svg';
import instagram from '../../../images/instagram.svg';
import linkdin from '../../../images/linkdin.svg';
import codixel from '../../../images/codixel.png';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{marginTop:'100px'}}>
          <footer>
              <div className="container-lg">
                <div className="footer-top">
                    <ul className="list-group list-group-horizontal flex-wrap justify-content-center">
                    <li className="list-group-item">
                            <a href="#">Get a Queto</a>
                        </li>
                        <li className="list-group-item" className="list-group-item">
                            <a href="#">Shop</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Project</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">Contact</a>
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
                <div className="text-center">
                copyright &copy; CodiXel 2020.
                </div>
              </div>
          </footer>
        </div>
    );
};

export default Footer;