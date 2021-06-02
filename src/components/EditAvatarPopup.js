import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoadingEditAvatar,
}) {
  const [avatar, setAvatar] = React.useState("");

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatar,
    });
    setAvatar("");
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      buttonText={isLoadingEditAvatar ? "Сохранение..." : "Сохранить"}
      isLoading={isLoadingEditAvatar}
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <section className="popup__form-section">
        <input
          onChange={handleChangeAvatar}
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
