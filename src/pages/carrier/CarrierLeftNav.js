import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import '../../pagestyle/dispatcher.css'

class CarrierLeftNav extends Component {
  constructor() {
    super();
    this.state = {
      nav: ''
    };
  }
  render() {
    return (

      <nav className="col-md-2 d-md-block bg-light sidebar" id="nav-padd">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link " id="item-nav" to="/carrier"  >
                <span data-feather="home"></span>
                Aktualności <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" id="item-nav" to="/myshifts">
                <span data-feather="file"></span>
                Moje wszystkie zmiany
                </Link>
            </li>
    
            <li className="nav-item">
              <Link className="nav-link" id="item-nav" to="/inprogressshifts">
                <span data-feather="file"></span>
                Moje zmiany - W trakcie 
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="item-nav" to="/shcreated">
                <span data-feather="file"></span>
                Moje zmiany - Utworzone
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="item-nav" to="/doneshifts">
                <span data-feather="file"></span>
                Moje zmiany - Archiwizowane
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="item-nav" to="/carrierchangestatus">
                <span data-feather="file"></span>
                Zmień status paczki
                </Link>
            </li>

          </ul>
        </div>
      </nav>

    );

  }
}

export default CarrierLeftNav;