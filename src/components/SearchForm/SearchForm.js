import './SearchForm.css';
import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

function SearchForm() {

    return (
        <form className="search__form">
            <input className="search__form-input" placeholder="Введите тему новости" />
            <button type="submit" className="search__form-button">Искать</button>
        </form>
    );
}

export default SearchForm;
