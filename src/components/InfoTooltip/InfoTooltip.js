import './InfoTooltip.css';

import React from 'react';

const InfoTooltip = ({ isOpen, onClose, onToggle }) => (
    <div className={`popup popup_type_tooltip ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <h2 className='popup__title'>Пользователь успешно зарегистрирован!</h2>
        <button className="popup__tooltip-button" onClick={onToggle}>Войти</button>
        <button
          type='button'
          className="popup__close-icon"
          onClick={onClose}
        />
      </div>
    </div>
);

export default InfoTooltip;
