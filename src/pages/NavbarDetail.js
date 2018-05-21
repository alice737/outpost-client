import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavbarDetail extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link className="navbar-brand" to="/" >Out Post</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">O nas
              <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Oferta</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/prices">Cennik</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Kontakt</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Logowanie/Rejestracja</Link>
                </li>
              </ul>

            </div>
          </nav>
        </header>
      </div>
    );
  }
}
export default NavbarDetail;