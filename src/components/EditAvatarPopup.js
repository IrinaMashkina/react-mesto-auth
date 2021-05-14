import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const AvatarRef = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: AvatarRef.current.value,
    });
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <section className="popup__form-section">
        <input
          ref={AvatarRef}
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
  );
}

export default EditAvatarPopup;
