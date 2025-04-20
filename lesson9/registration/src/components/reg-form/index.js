import "./style.css";
import { useState } from "react";
import validator from "validator";
import classNames from "class-names";
function RegForm() {
  const [name, setName] = useState("Владислав");
  const [email, setEmail] = useState("emailacc123@gmail.com");
  const [password, setPassword] = useState("12345");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (validate()) {
      const data = { name, email, password };
      const jsonData = JSON.stringify(data);
      console.log(jsonData);
    } else {
      console.log("Данные не прошли валидацию");
    }
  }

  function validate() {
    let isValid = true;
    if (validator.isEmpty(name)) {
      isValid = false;
      setNameError("Это поле является обязательным!");
    } else {
      setNameError("");
    }
    if (validator.isEmpty(email)) {
      isValid = false;
      setEmailError("Это поле является обязательным!");
    } else if (!validator.isEmail(email)) {
      isValid = false;
      console.log(isValid);
      setEmailError("Проверьте правильность написания почты!");
    } else {
      setEmailError("");
      isValid = true;
      console.log(isValid);
    }
    if (validator.isEmpty(password)) {
      isValid = false;
      setPasswError("Это поле является обязательным!");
    } else if (!validator.isLength(password, { min: 5, max: 20 })) {
      isValid = false;
      console.log(isValid);
      setPasswordError("Проверьте правильность написания пароля!");
    } else {
      setPasswordError("");
      isValid = true;
      console.log(isValid);
    }
    return isValid;
  }

  return (
    <div className="reg-form-page">
      <form id="reg" onSubmit={handleSubmit}>
        <span className="head">Регистрация</span>

        <div className={classNames("group", nameError ? "err" : "")}>
          <label htmlFor="name" className="title">
            Имя пользователя
          </label>
          <input
            value={name}
            type="text"
            id="name"
            placeholder="login"
            onChange={(event) => setName(event.target.value)}
          />
          <span className="error-message">{nameError}</span>
        </div>

        <div className={classNames("group", emailError ? "err" : "")}>
          <label htmlFor="email" className="title">
            Адрес электронной почты
          </label>
          <input
            value={email}
            type="text"
            id="email"
            placeholder="myMail@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
          />
          <span className="error-message">{emailError}</span>
        </div>

        <div className={classNames("group", passwordError ? "err" : "")}>
          <label htmlFor="password" className="title">
            Пароль
          </label>
          <input
            value={password}
            type="password"
            id="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <span className="error-message">{passwordError}</span>
        </div>

        <button type="submit" id="sendForm">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default RegForm;
