import React from "react";
import logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn, onSignOut, userEmail }) {
  const location = useLocation();
  return (
    <header className="header">
      <img src={logo} alt="Логотип сервиса Место." className="header__logo" />
      {loggedIn && (
        <div className="header__wrapper">
          <address className="header__address">
            {userEmail && userEmail}
          </address>
          <button type="button" onClick={onSignOut} className="header__button">
            Выйти
          </button>
        </div>
      )}
      {!loggedIn && (
        <nav>
          {location.pathname === "/sign-in" && (
            <Link className="header__navlink" to="./sign-up">
              Регистрация
            </Link>
          )}
          {location.pathname === "/sign-up" && (
            <Link className="header__navlink" to="/sign-in">
              Войти
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;
