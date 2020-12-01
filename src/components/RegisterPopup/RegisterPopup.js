import './RegisterPopup.css';

import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { mainApi } from '../../utils/MainApi.js';

import React from 'react';
import { useState } from 'react';


function RegisterPopup({ isOpen, onClose, onToggle, setIsToolipPopupOpen, setRegisterMessage, loadingIndicator }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function formReset() {
    setEmail('');
    setPassword('');
    setName('');
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    mainApi
      .register(email, password, name)
      .then((res) => {
        if (res.success) {
          console.log(res);
          formReset();
          onClose();
        } else {
          console.log(res);
        }
        setRegisterMessage(res);
        setIsToolipPopupOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <PopupWithForm
      name='register'
      title='Регистрация'
      isOpen={isOpen}
      onClose={onClose}
      loginOrRegister={
        <button type='button' className="popup__link">или&nbsp;
          <span className="popup__another-popup" onClick={onToggle}>
            Войти
          </span>
        </button>
      }
    >
      <form action="#" method="POST" name="form" className={`popup__form popup__form_${name}`} onSubmit={handleSubmit} noValidate>
        <div className="popup__input-container">
          <label className="popup__input-label">
            <p className="popup__label-text">Email</p>
            <input
              type='text'
              name='email'
              className='popup__form-input'
              required
              autoComplete='off'
              id='email-input'
              placeholder='Введите почту'
              minLength={2}
              pattern='^(http|https):\/\/[^ "]+$'
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
            <span id='email-input-error' className='popup__input-error'>Ошибка</span>
          </label>

          <label className="popup__input-label">
            <p className="popup__label-text">Пароль</p>
            <input
              type='text'
              name='password'
              className='popup__form-input'
              required
              autoComplete='off'
              id='password-input'
              placeholder='Введите пароль'
              minLength={5}
              maxLength={50}
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
            <span id='password-input-error' className='popup__input-error'></span>
          </label>

          <label className="popup__input-label">
            <p className="popup__label-text">Имя</p>
            <input
              type='text'
              name='name'
              className='popup__form-input'
              required
              autoComplete='off'
              id='name-input'
              placeholder='Введите своё имя'
              minLength={2}
              maxLength={30}
              pattern='[А-ЯЁа-яёA-Za-z-–—\s]*'
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
            <span id='name-input-error' className='popup__input-error'>Ошибка</span>
          </label>
        </div>
        <button type="submit" className={'popup__save-button popup__save-button_register'} disabled={loadingIndicator}>Зарегистрироваться</button>
      </form>
    </PopupWithForm>
  );
}

export default RegisterPopup;
