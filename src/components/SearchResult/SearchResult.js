import './SearchResult.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import news_1 from '../../images/news_1.png';
import news_2 from '../../images/news_2.png';
import news_3 from '../../images/news_3.png';
import news_4 from '../../images/news_4.png';

import NewsCard from '../NewsCard/NewsCard';

function SearchResult() {
  return (
        <section className="search-results">
            <Switch>
                <Route path="/main">
                    <h2 className="search-results__header">Результаты поиска</h2>
                    <div className="search-results__cards">
                        <NewsCard
                            cardImage={news_1}
                            cardDate={'2 августа, 2019'}
                            cardTitle={'Национальное достояние – парки'}
                            cardDescription={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
                            cardTag={'Дзен'}
                        />
                        <NewsCard
                            cardImage={news_2}
                            cardDate={'4 августа, 2018'}
                            cardTitle={'Лесные огоньки: история одной фотографии'}
                            cardDescription={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
                            cardTag={'Афиша'}
                        />
                        <NewsCard
                            cardImage={news_3}
                            cardDate={'15 сентрябя, 2019'}
                            cardTitle={'«Первозданная тайга»: новый фотопроект Игоря Шпиленка'}
                            cardDescription={'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...'}
                            cardTag={'Медиазона'}
                        />
                        <NewsCard
                            cardImage={news_4}
                            cardDate={'4 августа, 2018'}
                            cardTitle={'Лесные огоньки: история одной фотографии'}
                            cardDescription={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
                            cardTag={'Медуза'}
                        />
                    </div>
                    <button className="search-results__else-news-button">Показать еще</button>
                </Route>
                <Route path="/saved-news">
                    <div className="search-results__cards">
                    <NewsCard
                            cardImage={news_1}
                            cardDate={'2 августа, 2019'}
                            cardTitle={'Национальное достояние – парки'}
                            cardDescription={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.'}
                            cardTag={'Дзен'}
                        />
                        <NewsCard
                            cardImage={news_2}
                            cardDate={'4 августа, 2018'}
                            cardTitle={'Лесные огоньки: история одной фотографии'}
                            cardDescription={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
                            cardTag={'Афиша'}
                        />
                        <NewsCard
                            cardImage={news_3}
                            cardDate={'15 сентрябя, 2019'}
                            cardTitle={'«Первозданная тайга»: новый фотопроект Игоря Шпиленка'}
                            cardDescription={'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...'}
                            cardTag={'Медиазона'}
                        />
                        <NewsCard
                            cardImage={news_4}
                            cardDate={'4 августа, 2018'}
                            cardTitle={'Лесные огоньки: история одной фотографии'}
                            cardDescription={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.'}
                            cardTag={'Медуза'}
                        />
                    </div>
                </Route>
            </Switch>
        </section>
  );
}

export default SearchResult;
