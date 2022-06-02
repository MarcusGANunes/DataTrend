import React from "react";
import "bootstrap";
import './navbar.modules.css';

export default function NavbarComponent() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ms-0">
          <a class="navbar-brand d-inline-block" href="/">
            <img src="DataTrend.png" alt="" width='250'/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSite"
            aria-controls="navbarSite"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSite">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
