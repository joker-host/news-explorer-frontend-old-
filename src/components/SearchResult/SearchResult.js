import './SearchResult.css';

import NewsCard from '../NewsCard/NewsCard';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

function SearchResult() {

    return (
        <section className="search-results">
            <Switch>
                <Route path="/main">
                    <h2 className="search-results__header">Результаты поиска</h2>
                    <div className="search-results__cards">
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
                    <button className="search-results__else-news-button">Показать еще</button>
                </Route>
                <Route path="/saved-news">
                    <div className="search-results__cards">
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
                </Route>
            </Switch>
        </section>
    );
}

export default SearchResult;