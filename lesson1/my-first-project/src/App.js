import "./App.css";
import React from "react";

function App() {
  const divStyle = {
    "text-align": "center",
  };
  return (
    <>
      <div style="margin: auto">
        <h1 style={{ color: "red", "font-size": "20px" }}>Hello, World!</h1>
      </div>
      <p>Hello</p>
    </>
  );

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hello World!")
  // );
}

export default App;
