import React, { useState } from "react";

function App() {
  // А здесь уже два стейта
  const [name, setName] = useState("Иван");
  const [age, setAge] = useState(15);
  const [email, setEmail] = useState("emailacc123@gmail.com");
  const [surname, setSurname] = useState("Кревецкий");
  const [ban, setBan] = useState(true);

  return (
    <div>
      <p>Имя: {name}</p>
      <p>Возраст: {age}</p>
      <p>Фамилия: {surname}</p>
      <p>Почта: {email}</p>
      <p>
        Возраст: {age}
        <button onClick={() => setAge(age + 1)}>+</button>
        <button onClick={() => setAge(age - 1)}>-</button>
      </p>
      <p></p>
      <h1>
        {ban == true ? (
          <button onClick={() => setBan(false)}>Разбанить</button>
        ) : (
          <button onClick={() => setBan(true)}>Забанить</button>
        )}
      </h1>
      {ban == true ? "Вы забанены!" : "На вашем аккаунте нету бана"}
    </div>
  );
}

export default App;
