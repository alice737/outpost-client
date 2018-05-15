import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import Footer from './Footer';
//import '../pagestyle/transaction.css'
//import Container from './Container';
//import '../pagestyle/pack.css'


class Transaction extends Component {
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

          <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link class="nav-link" to="/moje-konto">MOJE KONTO</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/transakcje">MOJE TRANSAKCJE</Link>
            </li>

          </ul>



        </nav>

        <div class="row">
          <div class="col-sm-4">
            <div><a>K</a></div>
            


          </div>
          <div class="col-sm-8"> to do 
          
</div>

        </div>


       
      </div>




    );
  }
}
export default Transaction;