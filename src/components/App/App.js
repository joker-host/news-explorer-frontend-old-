import './App.css';

import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import SavedNews from '../SavedNews/SavedNews.js';
import RegisterPopup from '../RegisterPopup/RegisterPopup.js';
import LoginPopup from '../LoginPopup/LoginPopup.js';
import BurgerPopup from '../BurgerPopup/BurgerPopup.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';

function App() {
  function closeOverlay(evt) { // закрытие попапов при нажатии на область вокруг попапа
    if (evt.target.classList.contains('popup_opened')) {
      closeAllPopups();
    }
  }
  document.addEventListener('click', closeOverlay);

  function closeOnEscape(evt) { // закрытие попапов при нажатии Escape
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }
  document.addEventListener('keydown', closeOnEscape);

  function closeAllPopups() { // закрывает все попапы
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(false);
    setIsBurgerPopupOpen(false);
    setIsToolipPopupOpen(false);
    document.removeEventListener('keydown', closeOnEscape);
    document.removeEventListener('click', closeOverlay);
  }

  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  function handleRegisterPopup() { // открывает попап регистрации
    setIsRegisterPopupOpen(true);
  }

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  function handleLoginPopup() { // открывает попап логина
    setIsLoginPopupOpen(true);
  }

  function toggleLoginPopup() { // закрывает попап логина и открывает попап регистрации
    closeAllPopups();
    handleRegisterPopup();
  }

  function toggleRegisterPopup() { // закрывает попап регистрации и открывает попап логина
    closeAllPopups();
    handleLoginPopup();
  }

  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);
  function handleBurgerPopup() { // открывает меню на мобильных устройствах
    setIsBurgerPopupOpen(true);
  }

  const [isToolipPopupOpen, setIsToolipPopupOpen] = useState(false);
  function handleToolipPopup() { // открывает информационное окно
    setIsToolipPopupOpen(true);
  }

  function toggleToolipPopup() { // закрывает попап регистрации и открывает попап логина
    closeAllPopups();
    setIsLoginPopupOpen(true);
  }

  return (
    <div className="body">
      <Switch>
        <Route path="/main">
          <Header onRegister={handleLoginPopup} onBurgerMenu={handleBurgerPopup}/>
          <Main/>
          <Footer/>
        </Route>
        <Route path="/saved-news">
          <Header onRegister={handleLoginPopup} onBurgerMenu={handleBurgerPopup}/>
          <SavedNews/>
          <Footer/>
        </Route>
        <Redirect from='/' to='/main'/>
      </Switch>
      <RegisterPopup isOpen={isRegisterPopupOpen} onClose={closeAllPopups} onToggle={toggleRegisterPopup}/>
      <LoginPopup onEscape={closeAllPopups} isOpen={isLoginPopupOpen} onClose={closeAllPopups} onToggle={toggleLoginPopup}/>
      <BurgerPopup isOpen={isBurgerPopupOpen} onRegister={handleLoginPopup} onCloseBurger={closeAllPopups}/>
      <InfoTooltip isOpen={isToolipPopupOpen} onClose={closeAllPopups} onToggle={toggleToolipPopup}/>
    </div>
  );
}

export default App;
