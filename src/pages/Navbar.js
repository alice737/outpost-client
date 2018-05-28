import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/" >Out Post</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#onas">O nas
              <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#oferta">Oferta</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/prices">Cennik</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#kontakt">Kontakt</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Logowanie</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registration">Rejestracja</Link>
                </li>
              </ul>

            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default Navbar;