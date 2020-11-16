import './Footer.css';
import git from '../../images/git.svg';
import facebook from '../../images/facebook.svg';
import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
  
  return (
    <footer className="footer">
        <p className="footer__description">&copy; 2020 Supersite, Powered by News API</p>
        <div className="footer__container">
            <a className="footer__link footer__link_text" href="#">Главная</a>
            <a className="footer__link footer__link_text" href="#">Яндекс.Практикум</a>
            <a className="footer__link" href="#">
              <img className="footer__link-image" src={git}></img>
            </a>
            <a className="footer__link footer__link_indent" href="#">
              <img className="footer__link-image" src={facebook}></img>
            </a>
        </div>
    </footer>
  );
}

export default Footer;