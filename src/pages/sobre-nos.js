import React from "react";
import "../styles/aboutus.modules.css";

export default function Plataforma() {
  return (
    <div className="sobre-nos">
      <div className="aboutTitle">
        <h1>Conheça a equipe da connecta</h1>
      </div>
      <br />
      <br />
      <div>
        <div className="container1">
          <img src="card1.png" width="30%"/>
          <img src="card1.png" width="30%"/>
          <img src="card1.png" width="30%"/>
        </div>
        <div className="container2">
          <img src="card1.png" width="30%"/>
          <img src="card1.png" width="30%"/>
        </div>
      </div>
    </div>
  );
}
