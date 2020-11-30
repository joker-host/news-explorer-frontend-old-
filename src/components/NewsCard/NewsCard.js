import './NewsCard.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

function NewsCard({ cardImage, cardDate, cardTitle, cardDescription, cardTag, onClickArticle }) {
  return (
    <div className="search-results__card">
      <Switch>
        <Route path="/main">
          <div className="search-results__save-button-wrapper">
            <button type='button' className="search-results__save-button"></button>
            <div className="search-results__save-button-description">
              <p className="search-results__save-button-description-text">Войдите, чтобы сохранять статьи</p>
            </div>
          </div>
        </Route>
        <Route path="/saved-news">
          <div className="search-results__card-tag">
            <p className="search-results__card-text">Большой текстБольшой текстБольшой текстБольшой текст</p>
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
        <p className="search-results__date">{cardDate}</p>
        <h3 className="search-results__card-title">{cardTitle}</h3>
        <p className="search-results__card-description">{cardDescription}</p>
        <p className="search-results__card-source">{cardTag}</p>
      </div>
    </div>
  );
}

export default NewsCard;