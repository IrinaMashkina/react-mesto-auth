import React from 'react';
import './index.css';
import logo from './images/logo.svg';

function App() {
  return (
    <div className="page">
    <header className="header">
        <img src={logo} alt="Логотип сервиса Место." className="header__logo"/>
    </header>


    <main classNmae="main">

        <section className="profile">
            <div className="profile__information">
                <div className="profile__avatar-container">
 
                    <img className="profile__avatar-edit" src="<%=require('./images/edit-button.svg')%>"/>
                </div>
              
              <div className="profile__info">
                  <div className="profile__wrapper">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" aria-label="Кнопка открытия попапа" className="profile__edit-button"></button>
                  </div>
                  <p className="profile__profession">Исследователь океана</p>
              </div>
            </div>
            <button aria-label="Кнопка добавления фотографий" type="button" className="profile__add-button"></button>
        </section>


        <section className="elements">
            <template className="template">
                <figure className="card" data-id = "">
                    <img src="#" alt="#" className="card__image"/>
                    <figcaption className="card__caption">
                        <h2 className="card__title"></h2>
                        <div className ='card__like-container'>
                            <button aria-label="Кнопка нравится." type="button" className="card__like"></button>
                            <span className='card__likes-count'></span>   
                        </div>  
                    </figcaption>
                    <button aria-label="Удалить карточку." type="button" className="card__delete"></button>
                </figure>
            </template>
        </section>
            
        <section className="popup popup_place_edit">
            <form name="edit-form" className="popup__container popup__form" action='#' novalidate>
                <h2 className="popup__title">Редактировать профиль</h2>
                <section className="popup__form-section">
                  <input className="popup__input popup__input_type_name" id="input-name" name ="name" type="text" required minlength="2" maxlength="40" value=""/>
                  <span className="popup__input-error" id="input-name-error"></span>
                </section>
                <section className="popup__form-section">
                  <input className="popup__input popup__input_type_job" id="input-job" name="about" type="text" required minlength="2" maxlength="200" value=""/>
                  <span className="popup__input-error" id="input-job-error"></span>
                </section>
                <button className="popup__submit popup__submit_type_save" type="submit">Сохранить</button>
                <button className="popup__close-button popup__close-button_place_edit" type="button" aria-label="Закрыть"></button> 
            </form>
        </section>

        <section className="popup popup_place_card-add">
            <form name="add-form" className="popup__container popup__form" action='#' novalidate>
                <h2 className="popup__title">Новое место</h2>
                <section className="popup__form-section">
                  <input className="popup__input popup__input_type_title" id="input-card-title" name ="name" type="text" required minlength="2" maxlength="30" value="" placeholder="Название"/>
                  <span className="popup__input-error" id="input-card-title-error"></span>
                </section>
                <section className="popup__form-section">
                  <input className="popup__input popup__input_type_link" id="input-card-link" name="link" type="url" required value="" placeholder="Ссылка на картинку"/>
                  <span className="popup__input-error" id="input-card-link-error"></span>
                </section>
                <button className="popup__submit popup__submit_type_newcard" type="submit">Создать</button>
                <button className="popup__close-button popup__close-button_place_card-add" type="button" aria-label="Закрыть"></button> 
            </form>
        </section>
        
        <section className="popup popup_place_pic">
            <div className="popup__figure">
                <img src="#" alt="#" className="popup__image"/>
                <h2 className="popup__title popup__title_place_pic"></h2> 
                <button className="popup__close-button popup__close-button_place_pic" type="button" aria-label="Закрыть"></button>
            </div> 
        </section>

        <section className='popup popup_place_delete'>
            <div className='popup__container'>
                <h2 className = 'popup__title'>Вы уверены?</h2>
                <button type ="submit" className = 'popup__submit popup__submit_place_delete'>Да</button>
                <button className = 'popup__close-button popup__close-button_place_delete'></button>
            </div>
        </section>

        <section className='popup popup_place_avatar'>
            <form className='popup__container'>
                <h2 className="popup__title">Обновить аватар</h2>
                <section className="popup__form-section">
                    <input className="popup__input popup__input_type_link" id="input-avatar-link" name="link" type="url" required value="" placeholder="https://somewebsite.com/someimage.jpg"/>
                    <span className="popup__input-error" id="input-avatar-link-error"></span>
                </section>
                <button className="popup__submit popup__submit_type_avatar" type="submit">Сохранить</button>
                <button className="popup__close-button popup__close-button_place_avatar" type="button" aria-label="Закрыть"></button> 
            </form>
        </section>
    </main>

    <footer className="footer">
        <p className="footer__text">© 2020 Mesto Russia</p>
    </footer>
</div>
  );
};

export default App;
