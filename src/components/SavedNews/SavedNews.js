import './SavedNews.css';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchResult from '../SearchResult/SearchResult';

import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

function SavedNews() {

    return (
        <main className="content">
            <SavedNewsHeader />
            <SearchResult />
        </main>
    );
}

export default SavedNews;