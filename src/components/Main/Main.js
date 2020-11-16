import './Main.css';
import avatar from '../../images/me.jpg';
import news_1 from '../../images/news_1.png';
import not_found from '../../images/not-found.svg';
import React from 'react';

function Main() {

  return (
    <main className="content">
      <section className="search">
        <h2 className="search__title">Что творится в мире?</h2>
        <p className="search__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <form className="search__form">
          <input className="search__form-input" placeholder="Введите тему новости" />
          <button type="submit" className="search__form-button">Искать</button>
        </form>
      </section>
      <section className="search-results">
        <h2 className="search-results__header">Результаты поиска</h2>
        <div className="search-results__cards">
          <div className="search-results__card">
            <button className="search-results__save-button "></button>
            <img className="search-results__image" src={news_1}></img>
            <div className="search-results__card-wrapper">
              <p className="search-results__date">2 августа, 2019</p>
              <h3 className="search-results__card-title">Национальное достояние – парки</h3>
              <p className="search-results__card-description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
              <p className="search-results__card-source">Лента.ру</p>
            </div>
          </div>
          <div className="search-results__card">
            <button className="search-results__save-button search-results__save-button-active"></button>
            <img className="search-results__image" src={news_1}></img>
            <div className="search-results__card-wrapper">
              <p className="search-results__date">2 августа, 2019</p>
              <h3 className="search-results__card-title">Национальное достояние – парки</h3>
              <p className="search-results__card-description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
              <p className="search-results__card-source">Лента.ру</p>
            </div>
          </div>
          <div className="search-results__card">
            <button className="search-results__save-button"></button>
            <img className="search-results__image" src={news_1}></img>
            <div className="search-results__card-wrapper">
              <p className="search-results__date">2 августа, 2019</p>
              <h3 className="search-results__card-title">Национальное достояние – парки</h3>
              <p className="search-results__card-description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
              <p className="search-results__card-source">Лента.ру</p>
            </div>
          </div>
          <div className="search-results__card">
            <button className="search-results__save-button search-results__save-button-active"></button>
            <img className="search-results__image" src={news_1}></img>
            <div className="search-results__card-wrapper">
              <p className="search-results__date">2 августа, 2019</p>
              <h3 className="search-results__card-title">Национальное достояние – парки</h3>
              <p className="search-results__card-description">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
              <p className="search-results__card-source">Лента.ру</p>
            </div>
          </div>
        </div>
        <button className="search-results__else-news-button">Показать еще</button>
      </section>
      <section className="search-in-process visible">
        <i class="search-in-process__preloader"></i>
        <p className="search-in-process__label">Идет поиск новостей...</p>
      </section>
      <section className="search-without-results">
        <img className="search-without-results__image" src={not_found}></img>
        <h2 className="search-without-results__title">Ничего не найдено</h2>
        <p className="search-without-results__label">К сожалению по вашему запросу ничего не найдено.</p>
      </section>
      <section className="about-author">
        <div className="about-author__avatar-wrapper">
          <img className="about-author__avatar" src={avatar}></img>
        </div>
        <div className="about-author__description-wrapper">
          <h2 className="about-author__description-header">Об авторе</h2>
          <p className="about-author__description">
            Привет, посетитель сайта! Меня зовут Андрей и я его разработчик. Этот сайт является дипломным проектом курса "Веб-разработчик" в Яндекс Практикуме. Клиенсткая
            часть проекта написана на React.JS, а серверная часть на Node.JS. Используется база данных MongoDB, а так же различные npm-пакеты.
          </p>
          <p className="about-author__description">
            Почти за год обучения я с нуля освоил огромную базу современных технологий.
            Началось все с обычной верстки сайтов, это получалось почти сразу. Дальше появился JavaScript - мой первый язык программирования. Сначала не получалось, было очень сложно.
            Но упорный труд на протяжении полугода дал результат. Конечно, профессионалом за такое время не стать, но освоить язык на среднем уровне - вполне возможно.
            И я считаю, что с этой задачей я справился. 
          </p>
          <p className="about-author__description">
            Сейчас я могу создать с нуля сайт, написать к нему API, и загрузить проект на удаленный сервер.
            Научился разбираться в документации и внедрять разные библиотеки в проект.
            Стало получаться планировать свое время и декомпозировать глобальные, сложные задачи, а это очень важный навык для работы в коллективе. 
            Теперь я умею гуглить и задавать правильные вопросы, а так же профессионально воспринимать критику.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Main;