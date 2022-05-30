import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.modules.css';

export default function NavbarComponent() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand h1 mb-0" href="/">
            <img src="logo2.png" alt="" width="178.3" height="56.55" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSite"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSite">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <span className="text">Home</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blockchains">
                <span className="text">Blockchains</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/nfts">
                <span className="text">NFTs</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/smart-contracts">
                <span className="text">Smart Contracts</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/aboutus">
                <span className="text">About Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
