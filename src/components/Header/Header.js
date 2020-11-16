import './Header.css';
import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

function Header() {
  
  return (
    <header className="header">
        <a className="header__logo">
          <p>NewsExplorer</p>
        </a>
        <div className="header__nav-bar">
            <a className="header__link" href="#">Главная</a>
            <a className="header__link" href="#">Сохраненные статьи</a>
            <button className="header__logged-in-button">Авторизоваться</button>
        </div>
    </header>
  );
}

export default Header;

// 8495 482 27 79