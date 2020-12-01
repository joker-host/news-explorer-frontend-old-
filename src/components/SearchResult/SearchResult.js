import './SearchResult.css';

import placeholderImage from '../../images/news_1.png';

import NewsCard from '../NewsCard/NewsCard';

import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

const moment = require('moment');
import 'moment/locale/ru';

function SearchResult({ articles, setArticles, loggedIn, keyWord, isLoading, savedArticles }) {

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
      localStorage.setItem("articles", JSON.stringify({ articlesArr: articles.articlesArr, itemToShow: articles.itemToShow, showSection: articles.showSection }))
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
                      cardDate={publishedAt}
                      cardTitle={title}
                      cardDescription={description}
                      cardTag={author || 'Без указания источника'}
                      onClickArticle={url}
                      loggedIn={loggedIn}
                    />)
                // console.log(savedArticles)
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
            {
              // console.log(savedArticles)
              savedArticles.map(({ date, image, keyword, link, source, text, title, _id }) =>
                <NewsCard
                  key={_id}
                  // cardImage={urlToImage ? urlToImage : placeholderImage}
                  cardImage={image}
                  cardDate={date}
                  cardTitle={title}
                  cardDescription={text}
                  cardTag={source || 'Без указания источника'}
                  onClickArticle={link}
                  keyWord={keyword}
                  // loggedIn={loggedIn}
                />)
            }
          </div>
        </section>
      </Route>
    </Switch>
  );
}

export default SearchResult;
