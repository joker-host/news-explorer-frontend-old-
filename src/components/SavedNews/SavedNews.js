import './SavedNews.css';

import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchResult from '../SearchResult/SearchResult';

// import { Route, Link, useHistory } from 'react-router-dom';

function SavedNews() {
  return (
        <main className="content">
            <SavedNewsHeader />
            <SearchResult />
        </main>
  );
}

export default SavedNews;
