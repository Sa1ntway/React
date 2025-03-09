import logo from "./logo.svg";
import "./App.css";
import Car from "./Car/Car.js";
import Bus from "./Bus/Bus.js";

function App() {
  return (
    <>
      <div class="App">
        <h1>Hello World</h1>

        <Car />
        <Bus />
      </div>
    </>
  );
}

export default App;
