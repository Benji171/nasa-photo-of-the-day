import React from "react";
import "./App.css";
import CardList from "./Componets/CardList"
import logo from "./Assets/Logo.png"

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="NASA" />
        <h1>The Vault</h1>
        <CardList />
    </div>
  );
}

export default App;
