import React from "react";
import "./App.css";
import CardList from "./Componets/CardList"
import logo from "./Assets/Logo.png"



function App() {

  return (
    <div className="App">
      <img className="logo" src={logo} alt="NASA" />
        <h1 className="header">The Vault</h1>
            <div className="list-container">
              <CardList />
            </div>
    </div>
  );
}

export default App;
