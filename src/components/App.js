import React from "react";
import '../index.css';

import Header from "./Header.js";
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Footer from './Footer.js';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    
    function handleEditAvatarClick () {
        setEditAvatarPopupOpen(true)
    };

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    };

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    };
    

  return (
    <div className="page">
      <Header />
      <Main onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick} />
      <PopupWithForm title="Редактировать профиль" name="edit" isOpen = {isEditProfilePopupOpen} />
      <PopupWithForm title="Новое место" name="card-add" isOpen = {isAddPlacePopupOpen}/>
      <PopupWithForm title="Вы уверены?" name="delete"/>
      <PopupWithForm title="Обновить аватар" name="avatar" isOpen = {isEditAvatarPopupOpen}/>
      <ImagePopup />
      <Footer />
    </div>
  );
}

export default App;
