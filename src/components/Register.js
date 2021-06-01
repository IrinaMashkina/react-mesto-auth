import React from "react";
import Sign from "./Sign.js";
import { Link } from "react-router-dom";

const Register = ({ onRegistration }) => {
  const link = (
    <p className="">
      Уже зарегистрированы?{" "}
      <Link className="form__link" to="/sign-in">
        Войти
      </Link>
    </p>
  );

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistration({
      password: password,
      email: email,
    });
  };
  return (
    <Sign
      title="Регистрация"
      buttonText="Зарегистрироваться"
      link={link}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input"
        type="email"
        placeholder="Email"
        required
        minLength="2"
        maxLength="40"
        onChange={handleChangeEmail}
      />
      <span className=""></span>
      <input
        className="form__input"
        type="password"
        placeholder="Пароль"
        required
        minLength="2"
        maxLength="40"
        onChange={handleChangePassword}
      />
      <span className=""></span>
    </Sign>
  );
};

export default Register;
