import './SavedNewsHeader.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function SavedNewsHeader() {

  return (
    <section className="saved-news-info">
        <h2 className="saved-news-info__title">Сохранённые статьи</h2>
        <h3 className="saved-news-info__quantity">Андрей, у вас 5 сохранённых статей</h3>
        <p className="saved-news-info__description">По ключевым словам: Природа, Тайга и 2-м другим</p>
    </section>
  );
}

export default SavedNewsHeader;