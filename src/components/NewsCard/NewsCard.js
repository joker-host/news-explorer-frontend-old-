import './NewsCard.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

function NewsCard({
  cardImage, cardDate, cardTitle, cardDescription, cardTag,
}) {
  return (
        <div className="search-results__card">
            <Switch>
                <Route path="/main">
                    <div className="search-results__save-button-wrapper">
                        <div type='button' className="search-results__save-button"></div>
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

            <img className="search-results__image" src={cardImage} alt="здесь должна быть картинка для новости :)"></img>
            <a className="search-results__card-wrapper" href="#">
                <p className="search-results__date">{cardDate}</p>
                <h3 className="search-results__card-title">{cardTitle}</h3>
                <p className="search-results__card-description">{cardDescription}</p>
                <p className="search-results__card-source">{cardTag}</p>
            </a>
        </div>
  );
}

export default NewsCard;
