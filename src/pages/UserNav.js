import React, { Component } from 'react'
import '../pagestyle/usernav.css'
import { Link } from 'react-router-dom';



class UserNav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="" >Out Post</a>
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
                  <Link className="nav-link" to="/ceny">Cennik</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Kontakt</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">[NAME] Wyloguj</Link>
                </li>
              </ul>

            </div>
          </nav>
        </header>
        <nav>
          <h1>xx</h1>
          <ul className="nav nav-tabs" id="tab">
            <li className="nav-item active" id="tab-border">
              <Link class="nav-link " id="link-hover" to="/myaccount">MOJE KONTO</Link>
            </li>
            <li className="nav-item"  id="tab-border">
              <Link className="nav-link" id="link-hover" to="/parcels">MOJE PRZESYŁKI</Link>
            </li>
            <li className="nav-item"  id="tab-border">
              <Link className="nav-link" id="link-hover" to="/send">WYŚLIJ PRZESYŁKĘ</Link>
            </li>
            <li className="nav-item" id="tab-border">
              <Link className="nav-link" id="link-hover" to="/payments">MOJE PŁATNOŚCI</Link>
            </li>
            <li className="nav-item" id="tab-border">
              <Link className="nav-link" id="link-hover" to="/changepassword">ZMIEŃ HASŁO</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default UserNav;