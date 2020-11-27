import './App.css';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import SavedNews from '../SavedNews/SavedNews.js';
import RegisterPopup from '../RegisterPopup/RegisterPopup.js';
import LoginPopup from '../LoginPopup/LoginPopup.js';
import BurgerPopup from '../BurgerPopup/BurgerPopup.js';
import InfoTooltip from '../InfoTooltip/InfoTooltip.js';
import { newsApi } from '../../utils/NewsApi.js';

import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
const moment = require('moment');
import 'moment/locale/ru';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  // let localKeyWord = localStorage.getItem('key word');
  const [keyWord, setKeyWord] = useState('');
  const [articles, setArticles] = useState(null);
  function onSubmitSearchForm(e) {
    setIsLoading(true);
    e.preventDefault();
    newsApi.getArticles(keyWord)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
      })
  }
  // useEffect(() => {
  //   // let dateFrom = moment(Date.now() - 7 * 24 * 3600 * 1000).format('LLL');
  //   let dateFrom = moment(Date.now() - 7 * 24 * 3600 * 1000).format('LLL');
  //   // console.log(localStorage.getItem('key word'));
  //   if(keyWord !== null) {
  //     newsApi.getArticles()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //   }
  // }, []);

  // moment().format('LT');   // 12:58 PM
  // moment().format('LTS');  // 12:58:04 PM
  // moment().format('L');    // 11/27/2020
  // moment().format('l');    // 11/27/2020
  // moment().format('LL');   // November 27, 2020
  // moment().format('ll');   // Nov 27, 2020
  // moment().format('LLL');  // November 27, 2020 12:58 PM
  // moment().format('lll');  // Nov 27, 2020 12:58 PM
  // moment().format('LLLL'); // Friday, November 27, 2020 12:58 PM
  // moment().format('llll'); // Fri, Nov 27, 2020 12:59 PM

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
          <Header onRegister={handleLoginPopup} onBurgerMenu={handleBurgerPopup} />
          <Main setKeyWord={setKeyWord} onSubmitSearchForm={onSubmitSearchForm} isLoading={isLoading}/>
          <Footer />
        </Route>
        <Route path="/saved-news">
          <Header onRegister={handleLoginPopup} onBurgerMenu={handleBurgerPopup} />
          <SavedNews />
          <Footer />
        </Route>
        <Redirect from='/' to='/main' />
      </Switch>
      <RegisterPopup isOpen={isRegisterPopupOpen} onClose={closeAllPopups} onToggle={toggleRegisterPopup} />
      <LoginPopup onEscape={closeAllPopups} isOpen={isLoginPopupOpen} onClose={closeAllPopups} onToggle={toggleLoginPopup} />
      <BurgerPopup isOpen={isBurgerPopupOpen} onRegister={handleLoginPopup} onCloseBurger={closeAllPopups} />
      <InfoTooltip isOpen={isToolipPopupOpen} onClose={closeAllPopups} onToggle={toggleToolipPopup} />
    </div>
  );
}

export default App;
