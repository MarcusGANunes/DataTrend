import React from "react";
import "../styles/aboutus.modules.css";

export default function Plataforma() {
  return (
    <div className="sobre-nos">
      <div className="subtitle">
        <h2>Conheça a equipe da connecta</h2>
      </div>
      <div>
      <div className="horizontalContainer">
        <img className="containerElement1" src="card1.png" />
        <img className="containerElement2" src="card1.png" />
        <img className="containerElement3" src="card1.png" />
      </div>
      </div>
      <div>
        <div className="horizontalContainer2">
          <img className="containerElement1" src="card1.png" />
          <img className="containerElement2" src="card1.png" />
        </div>
      </div>
    </div>
  );
}
