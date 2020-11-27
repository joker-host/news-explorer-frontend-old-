import './RegisterPopup.css';

import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegisterPopup({
  isOpen, onClose, onToggle, loadingIndicator,
}) {
  return (
        <PopupWithForm
            name='register'
            title='Регистрация'
            isOpen={isOpen}
            onClose={onClose}
            buttonText={'Зарегистрироваться'}
            // onSubmit={handleSubmit}
            // loadingIndicator={loadingIndicator}
            loginOrRegister={
                <button type='button' className="popup__link">или&nbsp;
                    <span className="popup__another-popup" onClick={onToggle}>
                        Войти
                    </span>
                </button>
            }
        >
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
                    />
                    <span id='name-input-error' className='popup__input-error'>Ошибка</span>
                </label>
            </div>
        </PopupWithForm>
  );
}

export default RegisterPopup;
