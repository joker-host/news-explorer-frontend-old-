import './NoResults.css';
import not_found from '../../images/not-found.svg';
import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

function NoResults() {

    return (
        <section className="search-without-results">
            <img className="search-without-results__image" src={not_found}></img>
            <h2 className="search-without-results__title">Ничего не найдено</h2>
            <p className="search-without-results__label">К сожалению по вашему запросу ничего не найдено.</p>
        </section>
    );
}

export default NoResults;