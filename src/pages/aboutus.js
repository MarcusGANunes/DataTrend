import React from "react";
import "../styles/aboutus.modules.css";
import Card_1 from "../components/card/card1";
import Card_2 from "../components/card/card2";
import Card_3 from "../components/card/card3";

export default function AboutUs() {
  return (
    <div className="background">
      <div className="content">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="texts">
          <div className="subtitle">
            <h2>Our Goal</h2>
          </div>
          <p>
            We are 3 brazilian College Students willing to spread knowledge about Web 3.0, the next tecnhological leap in Internet's history.
          </p>
          <div className="subtitle">
            <h2>Meet the Team</h2>
          </div>
          <div className="horizontalContainer">
            <Card_1 />
            <Card_2 />
            <Card_3 />
          </div>
        </div>
      </div>
    </div>
  );
}
