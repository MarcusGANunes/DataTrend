import React from "react";
import "../styles/home.modules.css";
import PartnerCard from "../components/card/PartnerCard";

export default function Home() {
  return (
    <div className='home'>
      <section className="welcome">
        <div className="background">
          <div className="headline">
            <h1>Decida de onde comprar <br></br>sua energia</h1>
            <p>Participe do Crowdfunding</p>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="headline">
          <h1>Nossos Parceiros</h1>
          <p>#mostrar database</p>
        </div>
        <div className="partner-cards">
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </div>
      </section>
    </div>
  );
}
