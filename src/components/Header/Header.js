import './Header.css';

import logout from '../../images/logout.svg';
import menu_white from '../../images/menu_white.svg';
import menu_black from '../../images/menu_black.svg';

import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

function Header() {
  return (
    <Switch>
      <Route path="/main">
        <header className="header">
          <a className="header__logo" href="#">
            <h1 className="header__title">NewsExplorer</h1>
          </a>
          <div className="header__nav-bar">
            <img className="header__menu" src={menu_white}></img>
            <Link className="header__link header__link_current-page" to="/main">
              <div className="header__underline"></div>
              Главная
            </Link>
            <Link className="header__link" to="/saved-news">Сохраненные статьи</Link>
            <button className="header__logged-in-button">Авторизоваться</button>
          </div>
        </header>
      </Route>
      <Route path="/saved-news">
        <header className="header-white">
          <a className="header__logo" href="#">
            <h1 className="header__title">NewsExplorer</h1>
          </a>
          <div className="header__nav-bar">
            <img className="header__menu" src={menu_black}></img>
            <Link className="header__link" to="/main">Главная</Link>
            <Link className="header__link header__link_current-page" to="/saved-news">
              <div className="header-white__underline"></div>
              Сохраненные статьи
            </Link>
            <button className="header__logged-out-button">
              Андрей
              <img className="header__logged-out-image" src={logout}></img>
            </button>
          </div>
        </header>
      </Route>
    </Switch>
  );
}

export default Header;