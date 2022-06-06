import React from "react";
import "../styles/aboutus.modules.css";

export default function Plataforma() {
  return (
    <div className="background-aboutus">
      <div className="sobre-nos">
        <div className="aboutTitle">
          <h1>Conheça a equipe da connecta</h1>
        </div>
        <br />
        <br />
        <div>
          <div className="container1">
            <img src="card1.png" alt="" width="30%" />
            <img src="card2.png" alt="" width="30%" />
            <img src="card3.png" alt="" width="30%" />
          </div>
          <div className="container2">
            <img src="card4.png" alt="" width="30%" />
            <img src="card5.png" alt="" width="30%" />
          </div>
        </div>
      </div>
    </div>
  );
}
