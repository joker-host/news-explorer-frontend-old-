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
            <a className="link" href="#">
              <p className="footer__link">Главная</p>
            </a>
            <a className="link" href="#">
              <p className="footer__link">Яндекс.Практикум</p>
            </a>
            <a className="link" href="#">
              <img className="footer__link-image" src={git}></img>
            </a>
            <a className="link" href="#">
              <img className="footer__link-image footer__link_indent" src={facebook}></img>
            </a>
        </div>
    </footer>
  );
}

export default Footer;