import './BurgerPopup.css';

import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logout from '../../images/logout.svg';
import close from '../../images/close.svg';
import menu_black from '../../images/menu_black.svg';

function BurgerPopup({ isOpen, onRegister, onCloseBurger }) {
  function handleClickLoggedButton() {
    onCloseBurger();
    onRegister();
  }

  return (
        <div className={`burger-popup ${isOpen ? 'burger-popup_opened' : ''}`}>
            <div className={`burger-popup__container ${isOpen ? 'burger-popup__container_opened' : ''}`}>
                <header className="burger-popup__header">
                    <h2 className="burger-popup__logo">NewsExplorer</h2>
                    <img className="burger-popup__close-button" src={close} onClick={onCloseBurger} alt="здесь должна быть кнопка закрытия модального окна :)"/>
                </header>
                <div className="burger-popup__navbar">
                    <Link className="burger-popup__link" to="/main" onClick={onCloseBurger}>Главная</Link>
                    <Link className="burger-popup__link" to="/saved-news" onClick={onCloseBurger}>Сохраненные статьи</Link>
                    <button className="burger-popup__link__logged-in-button" onClick={handleClickLoggedButton}>Авторизоваться</button>
                </div>
            </div>

        </div>
  );
}

export default BurgerPopup;
