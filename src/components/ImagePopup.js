import React from "react";

function ImagePopup() {
  return (
    <section className="popup popup_place_pic">
      <div className="popup__figure">
        <img src="#" alt="#" className="popup__image" />
        <h2 className="popup__title popup__title_place_pic"></h2>
        <button
          className="popup__close-button popup__close-button_place_pic"
          type="button"
          aria-label="Закрыть"
        ></button>
      </div>
    </section>
  );
}

export default ImagePopup;
