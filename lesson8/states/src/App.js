import logo from "./logo.svg";
import "./App.css";
import React from "react";

class User extends React.Component {
  constructor() {
    super();
    this.state = { name: "Петр ", age: 18 };
  }
  click() {
    alert("Вам пришло сообщение");
  }
  logIn() {
    alert({ name: "Владислав", age: 15 });
  }
  render() {
    return (
      <div>
        Имя: {this.state.name}
        Возраст: {this.state.age}
        <button onClick={this.logIn.bind(this)}>Проверить сообщения</button>
      </div>
    );
  }
}

// class Button extends React.Component {
//   constructor() {
//     super();
//     this.state = { label: "Нажми меня!" };

//   }
//   click() {
//     this.setState({ label: "Спасибо!" });
//   }
//   render() {
//     return <button onClick={this.click()}>{this.state.label}</button>;
//   }
// }
function App() {
  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
