import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Car from "./Components/car";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Car name={"Ford"} year={2018} />
      <Car name={"Tesla Model X"} year={2020} />
      <Car name={"Volga"} year={1990} />
      <Car name={"Bugatti"} year={2000}>
        <p>Color: red</p>
      </Car>
    </div>
  );
}

export default App;
