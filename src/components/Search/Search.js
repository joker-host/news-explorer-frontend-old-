import './Search.css';

import SearchForm from '../SearchForm/SearchForm';

import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

function Search() {

    return (
        <section className="search">
            <div className="search__wrapper">
                <h2 className="search__title">Что творится в мире?</h2>
                <p className="search__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <SearchForm />
            </div>
        </section>
    );
}

export default Search;