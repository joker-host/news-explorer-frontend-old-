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
import { mainApi } from '../../utils/MainApi.js';
import { UserContext } from '../../contexts/CurrentUserContext.js';

import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
// const moment = require('moment');
// import 'moment/locale/ru';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    // хук, содержащий информцию о пользователе
    name: '',
    _id: '',
  });
  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi
        .getContent(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser({name: res.name, _id: res._id});
            setLoggedIn(true);
            // history.push('/saved-news');
          } else {
            setLoggedIn(false);
            localStorage.removeItem('jwt');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [loggedIn, history]);

  const [keyWord, setKeyWord] = useState('');
  const [articles, setArticles] = useState({ articlesArr: [], showSection: false });
  function onSubmitSearchForm(e) {
    setIsLoading(true);
    e.preventDefault();
    newsApi
      .getArticles(keyWord)
      .then((res) => {
        localStorage.setItem("keyWordForSave", keyWord)
        setIsLoading(false);
        setArticles({ articlesArr: res.articles, itemToShow: 3, showSection: true });
        localStorage.setItem("articles", JSON.stringify({ articlesArr: res.articles, itemToShow: articles.itemToShow, showSection: articles.showSection }))
        // console.log(res);
      })
  }

  // function handleCardLike(props) {
  //   //лайк/дизлайк карточки
  //   const isSaved = props.likes.some((i) => i === currentUser._id);
  //   const cardCallback = (newCard) => {
  //     const newCards = cards.map((item) => (item._id === props._id ? newCard : item));
  //     setCards(newCards);
  //     setIsLoading(false);
  //   };

  //   if (!isSaved) {
  //     api.likeCards(props._id).then(cardCallback);
  //   } else {
  //     api.disLikeCards(props._id).then(cardCallback);
  //   }
  // }

  const [savedArticles, setSavedArticles] = useState([]);

  function loadSavedArticles() {
    mainApi
      .getInitialArticles()
      .then((res) => {
        setSavedArticles(res)
        // console.log(savedArticles)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    loadSavedArticles();
  }, [articles]);

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

  const [isLoading, setIsLoading] = useState(false);

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
    // setIsToolipPopupOpen(false);
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


  const [registerMessage, setRegisterMessage] = useState({
    message: '',
    validation: {
      body: {
        message: ''
      }
    }
  });
  const [isToolipPopupOpen, setIsToolipPopupOpen] = useState(false)
  function handleToolipPopup() { // закрывает информационное окно
    setIsToolipPopupOpen(false);
  }

  function toggleToolipPopup() { // закрывает попап регистрации и открывает попап логина
    handleToolipPopup();
    setIsLoginPopupOpen(true);
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className="body">
        <Switch>
          <Route path="/main">
            <Header onRegister={handleLoginPopup} onBurgerMenu={handleBurgerPopup} loggedIn={loggedIn} />
            <Main
              setKeyWord={setKeyWord}
              keyWord={keyWord}
              onSubmitSearchForm={onSubmitSearchForm}
              isLoading={isLoading}
              articles={articles}
              setArticles={setArticles}
              loggedIn={loggedIn}
              savedArticles={savedArticles}
            />
            <Footer />
          </Route>
          <Route path="/saved-news">
            <Header onRegister={handleLoginPopup} onBurgerMenu={handleBurgerPopup} loggedIn={loggedIn} />
            <SavedNews articles={articles} setArticles={setArticles} savedArticles={savedArticles}/>
            <Footer />
          </Route>
          <Redirect from='/' to='/main' />
        </Switch>
        <RegisterPopup
          isOpen={isRegisterPopupOpen}
          onClose={closeAllPopups}
          onToggle={toggleRegisterPopup}
          setIsToolipPopupOpen={setIsToolipPopupOpen}
          setRegisterMessage={setRegisterMessage}
        />
        <LoginPopup
          onEscape={closeAllPopups}
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onToggle={toggleLoginPopup}
          handleLogin={handleLogin}
        />
        <BurgerPopup
          isOpen={isBurgerPopupOpen}
          onRegister={handleLoginPopup}
          onCloseBurger={closeAllPopups}
        />
        <InfoTooltip
          isOpen={isToolipPopupOpen}
          onClose={handleToolipPopup}
          onToggle={toggleToolipPopup}
          resultMessage={registerMessage}
        />
      </div>
    </UserContext.Provider>
  );
}

export default App;
