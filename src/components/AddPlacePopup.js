import React from 'react';
import api from '../utils/api';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

const [cardName, setCardName] = React.useState("");
const [cardLink, setCardLink] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
       onAddPlace({
           name: cardName,
           link: cardLink
       })
    }

    function handleChangeCardName(e) {
        setCardName(e.target.value);
      }
    
      function handleChangeCardLink(e) {
        setCardLink(e.target.value);
      }
    
    
    return (
        <PopupWithForm
        title="Новое место"
        name="card-add"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <section className="popup__form-section">
          <input
            className="popup__input popup__input_type_title"
            id="input-card-title"
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="30"
            defaultValue=""
            placeholder="Название"
            onChange={handleChangeCardName}
          />
          <span
            className="popup__input-error"
            id="input-card-title-error"
          ></span>
        </section>
        <section className="popup__form-section">
          <input
            className="popup__input popup__input_type_link"
            id="input-card-link"
            name="link"
            type="url"
            required
            defaultValue=""
            placeholder="Ссылка на картинку"
            onChange={handleChangeCardLink}
          />
          <span
            className="popup__input-error"
            id="input-card-link-error"
          ></span>
        </section>
      </PopupWithForm>
    )
}

export default AddPlacePopup;