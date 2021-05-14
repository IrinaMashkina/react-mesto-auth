import React, { useEffect } from "react";
import "../index.css";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Header from "./Header.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from './EditAvatarPopup.js';
import ImagePopup from "./ImagePopup.js";
import Footer from "./Footer.js";
import api from "../utils/Api";


function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
  }, []);

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
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

  function handleUpdateUser(user) {
    api.editUserInfo(user).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    }).catch((err) => console.log(err));
  }

  function handleUpdateAavatar(user) {
    api.editAvatar(user.avatar).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    }).catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAavatar}/>
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

       

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
