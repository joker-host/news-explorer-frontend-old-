import './Preloader.css';
import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

function Preloader() {

    return (
        <section className="search-in-process">
            <i className="search-in-process__preloader"></i>
            <p className="search-in-process__label">Идет поиск новостей...</p>
        </section>
    );
}

export default Preloader;