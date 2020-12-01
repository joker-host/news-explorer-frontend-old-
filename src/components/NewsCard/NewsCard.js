import './NewsCard.css';

import { mainApi } from '../../utils/MainApi.js';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

const moment = require('moment');
import 'moment/locale/ru';
const validator = require('validator');

function NewsCard({ 
  cardImage, 
  cardDate, 
  cardTitle, 
  cardDescription, 
  cardTag, 
  onClickArticle, 
  loggedIn, 
  keyWord
}) 
{
  const keyWordForSave = localStorage.getItem("keyWordForSave") || "Без ключевого слова";
  function saveArticle() {
    mainApi
      .saveArticle( 
        keyWordForSave,
        cardTitle, 
        cardDescription, 
        cardDate,
        cardTag, 
        onClickArticle,
        validator.isURL(cardImage) ?
          cardImage : 
          'https://get.pxhere.com/photo/nature-branch-plant-leaf-flower-frost-foliage-green-herb-botany-garden-flora-gardening-shrub-jasmine-flowering-plant-common-sage-land-plant-20931.jpg'
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="search-results__card">
      <Switch>
        <Route path="/main">
          <div className="search-results__save-button-wrapper">
            <button type='button' className="search-results__save-button" disabled={!loggedIn} onClick={saveArticle}></button>
            <div className="search-results__save-button-description">
              <p className="search-results__save-button-description-text">Войдите, чтобы сохранять статьи</p>
            </div>
          </div>
        </Route>
        <Route path="/saved-news">
          <div className="search-results__card-tag">
            <p className="search-results__card-text">{keyWord}</p>
          </div>
          <div className="search-results__save-button-wrapper">
            <button type='button' className="search-results__save-button search-results__delete"></button>
            <div className="search-results__save-button-description">
              <p className="search-results__save-button-description-text">Убрать из сохранённых</p>
            </div>
          </div>
        </Route>
      </Switch>

      <img className="search-results__image" 
        src={cardImage} 
        alt="здесь должна быть картинка для новости :)" 
        onError={(e) => {e.target.src = 'https://avatars.mds.yandex.net/get-zen_doc/1132604/pub_5fbf9b271080732360f5473b_5fbf9bc9b1f92632ba86f7bb/scale_2400'}}>
      </img>
      <div className="search-results__card-wrapper">
        <a className="search-results__card-link" href={onClickArticle} target="_blank" rel="noreferrer"></a>
        <p className="search-results__date">{moment(cardDate).format('LL').replace('$1, $2').slice(0, -3)}</p>
        <h3 className="search-results__card-title">{cardTitle}</h3>
        <p className="search-results__card-description">{cardDescription}</p>
        <p className="search-results__card-source">{cardTag}</p>
      </div>
    </div>
  );
}

export default NewsCard;