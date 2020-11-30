import './SavedNews.css';

import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchResult from '../SearchResult/SearchResult';

// import { Route, Link, useHistory } from 'react-router-dom';

function SavedNews({articles, setArticles}) {
  return (
    <main className="content">
      <SavedNewsHeader />
      <SearchResult articles={articles} setArticles={setArticles}/>
    </main>
  );
}

export default SavedNews;
