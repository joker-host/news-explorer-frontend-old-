import './Main.css';

import React from 'react';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NoResults from '../NoResults/NoResults';
import Search from '../Search/Search';
import SearchResult from '../SearchResult/SearchResult';

function Main({ setKeyWord, onSubmitSearchForm, isLoading, articles, setArticles }) {
  return (
    <main className="content">
      <Search setKeyWord={setKeyWord} onSubmitSearchForm={onSubmitSearchForm}/>
      <SearchResult articles={articles} setArticles={setArticles}/>
      {isLoading ? <Preloader/> : ''}
      <NoResults />
      <About />
    </main>
  );
}

export default Main;
