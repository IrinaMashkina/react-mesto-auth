import React from "react";
import editButton from '../images/edit-button.svg';
import api from '../utils/Api.js';

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect( () => {
    api.getUserInfo().then((data) => {
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar)
    }).catch((err) => {
      console.log(err);
  })})
    return(
        <main className="main">

        <section className="profile">
          <div className="profile__information">
            <div className="profile__avatar-container" onClick = {props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})`}} >
              <img
                className="profile__avatar-edit"
                src={editButton}
               
              />
            </div>

            <div className="profile__info">
              <div className="profile__wrapper">
                <h1 className="profile__name">{userName}</h1>
                <button
                  type="button"
                  aria-label="Кнопка открытия попапа"
                  className="profile__edit-button"
                  onClick = {props.onEditProfile}
                ></button>
              </div>
              <p className="profile__profession">{userDescription}</p>
            </div>
          </div>
          <button
            aria-label="Кнопка добавления фотографий"
            type="button"
            className="profile__add-button"
            onClick = {props.onAddPlace}
          ></button>
        </section>

        <section className="elements">
          <template className="template">
            <figure className="card" data-id="">
              <img src="#" alt="#" className="card__image" />
              <figcaption className="card__caption">
                <h2 className="card__title"></h2>
                <div className="card__like-container">
                  <button
                    aria-label="Кнопка нравится."
                    type="button"
                    className="card__like"
                  ></button>
                  <span className="card__likes-count"></span>
                </div>
              </figcaption>
              <button
                aria-label="Удалить карточку."
                type="button"
                className="card__delete"
              ></button>
            </figure>
          </template>
        </section>

        

        

        
       
      </main>
    )
}

export default Main;