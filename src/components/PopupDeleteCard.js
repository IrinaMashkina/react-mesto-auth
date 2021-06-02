import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function PopupDeleteCard(props) {
  return (
    <PopupWithForm
      title={props.title}
      buttonText={props.isLoading ? "Удаление..." : props.buttonText}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.onSubmit}
      isLoading={props.isLoading}
    ></PopupWithForm>
  );
}

export default PopupDeleteCard;
