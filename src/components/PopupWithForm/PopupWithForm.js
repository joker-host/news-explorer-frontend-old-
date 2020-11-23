import './PopupWithForm.css';

import React from 'react';

function PopupWithForm({
  name, title, isOpen, onClose, buttonText, onSubmit, children, loadingIndicator, loginOrRegister,
}) {
  function onEscape(event) {
    if (event.key === 'Escape') {
      alert('123123123');
    }
  }

  return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onKeyPress={onEscape}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form action="#" method="POST" name="form" className={`popup__form popup__form_${name}`} onSubmit={onSubmit} noValidate>
                    {children}
                    <button type="submit" className={`popup__save-button popup__save-button_${name}`} disabled={loadingIndicator}>{buttonText}</button>
                </form>
                <button type="button" className={`popup__close-icon popup__close-icon_${name}`} onClick={onClose}/>
                {loginOrRegister}
            </div>
        </div>
  );
}

export default PopupWithForm;
