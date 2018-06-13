import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../pagestyle/dispatcher.css'
class AdminLeftNav extends Component{
    render(){
        return(
        <nav className="col-md-2  d-md-block bg-light sidebar" id="nav-padd">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link " id="item-nav" to="/admin">
                  <span data-feather="home"></span>
                  Aktualności <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"id="item-nav" to="/allemployees">
                  <span data-feather="file"></span>
                  Pracownicy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/carriers">
                  <span data-feather="file"></span>
                  Kurierzy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/dispatchers">
                  <span data-feather="file"></span>
                  Dyspozytorzy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/administrators">
                  <span data-feather="file"></span>
                 Administratorzy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/addemployee">
                  <span data-feather="file"></span>
                  Dodaj nowego pracownika
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/addparcel">
                  <span data-feather="file"></span>
                  Dodaj paczke
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/parcellist">
                  <span data-feather="file"></span>
                  Lista paczek
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav"  to="/statistic">
                  <span data-feather="file"></span>
                 Statystyki
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav"  to="/changestatus">
                  <span data-feather="file"></span>
                 Zmień status
                </Link>
              </li>
            </ul>
          </div>
     </nav>
  
        );
        
    }
}
 
export default AdminLeftNav;