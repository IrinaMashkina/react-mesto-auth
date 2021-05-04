import React from "react";
import "../index.css";

import Header from "./Header.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Footer from "./Footer.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [name, setName] = React.useState("");
  const [profession, setProfession] = React.useState("");

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick(userName, userDescription) {
    setEditProfilePopupOpen(true);
    setName(userName);
    setProfession(userDescription);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <section className="popup__form-section">
          <input
            className="popup__input popup__input_type_name"
            id="input-name"
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="40"
            defaultValue={name}
          />
          <span className="popup__input-error" id="input-name-error"></span>
        </section>
        <section className="popup__form-section">
          <input
            className="popup__input popup__input_type_job"
            id="input-job"
            name="about"
            type="text"
            required
            minLength="2"
            maxLength="200"
            defaultValue={profession}
          />
          <span className="popup__input-error" id="input-job-error"></span>
        </section>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="card-add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
          />
          <span
            className="popup__input-error"
            id="input-card-link-error"
          ></span>
        </section>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" nameName="delete"></PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <section className="popup__form-section">
          <input
            className="popup__input popup__input_type_link"
            id="input-avatar-link"
            name="link"
            type="url"
            required
            defaultValue=""
            placeholder="https://somewebsite.com/someimage.jpg"
          />
          <span
            className="popup__input-error"
            id="input-avatar-link-error"
          ></span>
        </section>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
