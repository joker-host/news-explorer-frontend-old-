import './SavedNews.css';

import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchResult from '../SearchResult/SearchResult';

// import { Route, Link, useHistory } from 'react-router-dom';

function SavedNews({articles, setArticles, savedArticles}) {
  return (
    <main className="content">
      <SavedNewsHeader />
      <SearchResult articles={articles} setArticles={setArticles} savedArticles={savedArticles}/>
    </main>
  );
}

export default SavedNews;
