import './About.css';
import avatar from '../../images/me.jpg';

import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';

function About() {

    return (
        <section className="about-author">
            <div className="about-author__avatar-wrapper">
                <img className="about-author__avatar" src={avatar}></img>
            </div>
            <div className="about-author__description-wrapper">
                <h2 className="about-author__description-header">Об авторе</h2>
                <p className="about-author__description">
                    Привет! Меня зовут Андрей и я разработчик этого сайта. Он является дипломным проектом курса "Веб-разработчик" в Яндекс Практикуме. Клиенсткая
                    часть проекта написана на React.JS, а серверная&nbsp;на Node.JS. Используется база данных MongoDB, а так же различные npm-пакеты.
                </p>
                <p className="about-author__description">
                    Почти за год обучения я с нуля освоил огромную базу современных технологий.
                    Началось все с обычной верстки сайтов, это получалось почти сразу. Дальше появился JavaScript &#8211; мой первый язык программирования. Сначала не получалось, было очень сложно.
                    Но упорный труд на протяжении полугода дал результат. Конечно, профессионалом за такое время не стать, но освоить язык на среднем уровне &#8211; вполне возможно.
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
    );
}

export default About;