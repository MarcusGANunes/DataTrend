import React from "react";
import "bootstrap";
import './navbar.modules.css';

export default function NavbarComponent() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ms-0">
          <a class="navbar-brand d-inline-block" href="/">
            <img src="logo2.png" alt="" width='150'/>
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
                <a class="nav-link" href="/plataforma">
                <span className="text">A Plataforma</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/sobre-nos">
                <span className="text">Sobre Nós</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/resumo">
                <span className="text">Resumo</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/editar-portfolio">
                <span className="text">Editar Portfolio</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/crowdfunding">
                <span className="text">Crowdfunding</span>
                </a>
              </li>
            </ul>
            <div>
              <a class="nav-link" href="login">
                <span className="loginText">LOGIN</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
