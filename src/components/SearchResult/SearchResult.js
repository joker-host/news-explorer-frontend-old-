import './SearchResult.css';

import placeholderImage from '../../images/news_1.png';

import NewsCard from '../NewsCard/NewsCard';

import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

const moment = require('moment');
import 'moment/locale/ru';

function SearchResult({ articles, setArticles, isLoading }) {

  const [esleButtonShow, setEsleButtonShow] = useState(true);

  function checkArrayLength() {
    if (articles.itemToShow >= articles.articlesArr.length) {
      setEsleButtonShow(false);
    }
  }

  function showMore() {
    checkArrayLength();
    setArticles({ articlesArr: articles.articlesArr, itemToShow: articles.itemToShow + 3, showSection: true });
    checkArrayLength();
    window.scrollTo({
      top: 576,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    checkArrayLength();
    if (articles.articlesArr.length > 0) {
      localStorage.setItem("articles", JSON.stringify({articlesArr: articles.articlesArr, itemToShow: articles.itemToShow, showSection: articles.showSection}))
    }
  }, [articles]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("articles"))) {
      setArticles(JSON.parse(localStorage.getItem("articles")));
    }
  }, []);

  function test() {
    console.log(1);
  }

  return (
    <Switch>
      <Route path="/main">
        {articles.showSection ?
          <section className="search-results">
            <h2 className="search-results__header" onClick={test}>Результаты поиска</h2>
            <div className="search-results__cards">
              {
                articles.articlesArr
                  .slice(0, articles.itemToShow)
                  .map(({ description, publishedAt, urlToImage, title, author, url }) =>
                    <NewsCard
                      key={url}
                      cardImage={urlToImage ? urlToImage : placeholderImage}
                      cardDate={moment(publishedAt).format('LL')}
                      cardTitle={title}
                      cardDescription={description}
                      cardTag={author || 'Без указания источника'}
                      onClickArticle={url}
                    />)
              }
            </div>
            {
              esleButtonShow ? <button className="search-results__else-news-button" onClick={showMore}>Показать еще</button> : ''
            }
          </section>
          : ''
        }
      </Route>
      <Route path="/saved-news">
        <section className="search-results">
          <div className="search-results__cards">
            {/* <NewsCard
              cardImage={placeholderImage}
              cardDate={'2 августа, 2019'}
              cardTitle={'Национальное достояние – парки'}
              cardDescription={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
              cardTag={'Дзен'}
            />
            <NewsCard
              cardImage={placeholderImage}
              cardDate={'4 августа, 2018'}
              cardTitle={'Лесные огоньки: история одной фотографии'}
              cardDescription={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
              cardTag={'Афиша'}
            />
            <NewsCard
              cardImage={placeholderImage}
              cardDate={'15 сентрябя, 2019'}
              cardTitle={'«Первозданная тайга»: новый фотопроект Игоря Шпиленка'}
              cardDescription={'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...'}
              cardTag={'Медиазона'}
            />
            <NewsCard
              cardImage={placeholderImage}
              cardDate={'4 августа, 2018'}
              cardTitle={'Лесные огоньки: история одной фотографии'}
              cardDescription={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
              cardTag={'Медуза'}
            /> */}
          </div>
        </section>
      </Route>
    </Switch>
  );
}

export default SearchResult;
