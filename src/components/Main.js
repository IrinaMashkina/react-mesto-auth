import React from "react";
import Card from "./Card.js";
import editButton from "../images/edit-button.svg";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const [cards, setCards] = React.useState([]);



  React.useEffect(() => {
    api
      .getInitialCards()
      .then(data => {
        setCards(
          data.map(item => ({
            _id: item._id,
            name: item.name,
            alt: item.name,
            link: item.link,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

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
                onClick={() => props.onEditProfile(currentUser.name, currentUser.about)}
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
        {cards.map(card => 
          <Card card = {card} key={card._id} onCardClick = {props.onCardClick} />
        )}
      </section>
    </main>
  );
}

export default Main;
