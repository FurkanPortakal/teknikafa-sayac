import React from "react";
import "./App.css";
import Sayac from "./Sayac";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} className="teknik" />
      <Sayac />
    </div>
  );
}

export default App;
