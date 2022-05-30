import React from "react";
import "../styles/smartcontracts.modules.css";
import ButtonComponent from "../components/button";

export default function SmartContracts() {
  return (
    <div className="background">
      <div className="content">
        <div className="title">
          <h1>Smart Contracts</h1>
        </div>
        <div className="texts">
          <div className="subtitle">
            <h2>What they are</h2>
          </div>
          <p>
            In short, smart contracts are contract systems used to automatically
            execute transactions without the need of any companies, governments or
            entities as intermediaries. In other words, without expensive fees nor
            bureaucracy. It supports 3 of Blockchains main properties, which are:
          </p>
          <ol>
            <li>Optimized Security</li>
            <li>Optimized Decentralization</li>
            <li> Optimized Scalability</li>
          </ol>
          <p>
            In layman's terms, if one wouldd want to write a will inside a smart
            contract, a lawyer writes this contract in natural language and a
            developer transcribes this information into a programming language.
            One can describe all of it's assets and heirs, for example, and when
            the death certificate is published on the network, the transfer of
            goods takes place automatically, quickly, without any kind of bureaucracy, with
            the due taxes already paid and with little cost compared to the
            traditional will's system. This is because all participants involved in the
            transfer of assets are connected in a single, integrated system, so
            we can reduce it to a self-executing computer protocol which safety is assured by a blockchain. If you want to get started, just click below.
          </p>
          <div className="buttonContainer">
            <ButtonComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
