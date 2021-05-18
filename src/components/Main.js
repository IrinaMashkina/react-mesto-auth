import React from "react";
import Card from "./Card.js";
import editButton from "../images/edit-button.svg";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__information">
          <div
            className="profile__avatar-container"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          >
            <img className="profile__avatar-edit" src={editButton} />
          </div>

          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                type="button"
                aria-label="Кнопка открытия попапа"
                className="profile__edit-button"
                onClick={() =>
                  props.onEditProfile(currentUser.name, currentUser.about)
                }
              ></button>
            </div>
            <p className="profile__profession">{currentUser.about}</p>
          </div>
        </div>
        <button
          aria-label="Кнопка добавления фотографий"
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="elements">
        {props.cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
