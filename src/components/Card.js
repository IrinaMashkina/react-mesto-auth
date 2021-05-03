import React from "react";

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
      } 

  return (
    <div className="template">
      <figure className="card">
        <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
        <figcaption className="card__caption">
          <h2 className="card__title">{card.name}</h2>
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
    </div>
  );
}

export default Card;
