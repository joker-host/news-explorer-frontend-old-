import './SavedNews.css';

import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SearchResult from '../SearchResult/SearchResult';

// import { Route, Link, useHistory } from 'react-router-dom';

<<<<<<< HEAD
function SavedNews({articles, setArticles}) {
  return (
    <main className="content">
      <SavedNewsHeader />
      <SearchResult articles={articles} setArticles={setArticles}/>
=======
function SavedNews({articles, setArticles, savedArticles}) {
  return (
    <main className="content">
      <SavedNewsHeader />
      <SearchResult articles={articles} setArticles={setArticles} savedArticles={savedArticles}/>
>>>>>>> 464b370cd969a3ff8b3b12f6f04a1960d547e683
    </main>
  );
}

export default SavedNews;
