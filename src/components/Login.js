import React from "react";
import Sign from "./Sign.js";

const Login = ({ onAuthotization }) => {
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
    onAuthotization({
      password,
      email,
    });
    setEmail("");
    setPassword("");
  };

  return (
    <Sign title="Вход" buttonText="Войти" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="email"
        placeholder="Email"
        required
        minLength="2"
        maxLength="40"
        onChange={handleChangeEmail}
      />
      <span className="form__input-error"></span>
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

export default Login;
