import './SearchForm.css';

import React from 'react';
import { useState, useEffect } from 'react';
// import { Route, Link, useHistory } from 'react-router-dom';

function SearchForm({ setKeyWord, onSubmitSearchForm }) {
  // const [keyWord, setKeyWord] = useState('');

  function handleChangeKeyWord(e) {
    setKeyWord(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(keyWord);
    // localStorage.setItem('key word', keyWord);
  }

  return (
        <form className="search__form" onSubmit={onSubmitSearchForm}>
            <input className="search__form-input" placeholder="Введите тему новости" required onChange={handleChangeKeyWord}/>
            <button type="submit" className="search__form-button">Искать</button>
        </form>
  );
}

export default SearchForm;
