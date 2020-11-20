import './NewsCard.css';
import news_1 from '../../images/news_1.png';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function NewsCard() {

    return (
        <div className="search-results__card">


            <Switch>
                <Route path="/main">
                    <div className="search-results__save-button-wrapper">
                        <div className="search-results__save-button"></div>
                        <div className="search-results__save-button-description">
                            <p className="search-results__save-button-description-text">Войдите, чтобы сохранять статьи</p>
                        </div>
                    </div>
                </Route>
                <Route path="/saved-news">
                    <div class="search-results__card-tag">
                        <p class="search-results__card-text">Большой текстБольшой текстБольшой текстБольшой текст</p>
                    </div>
                    <div className="search-results__save-button-wrapper">
                        <div className="search-results__save-button search-results__delete"></div>

                        <div className="search-results__save-button-description">
                            <p className="search-results__save-button-description-text">Убрать из сохранённых</p>
                        </div>
                    </div>
                </Route>
            </Switch>

            <img className="search-results__image" src={news_1}></img>
            <a className="search-results__card-wrapper" href="#">
                <p className="search-results__date">2 августа, 2019</p>
                <h3 className="search-results__card-title">Национальное достояние – парки</h3>
                <p className="search-results__card-description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
                <p className="search-results__card-source">Лента.ру</p>
            </a>
        </div>
    );
}

export default NewsCard;