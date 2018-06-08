import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import '../../pagestyle/dispatcher.css'

class MyAccoutNav extends Component{
  constructor(){
    super();
    this.state={
      nav:''
    };
  }
    render(){
        return(
    
        <nav className="col-md-2 d-md-block bg-light sidebar" id="nav-padd">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link " id="item-nav" to="/myaccount"  >
                  <span data-feather="home"></span>
                  Aktualności <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"id="item-nav" to="/editaccount">
                  <span data-feather="file"></span>
                  Edytuj dane
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/send">
                  <span data-feather="file"></span>
                 Wyślij paczkę
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/payments">
                  <span data-feather="file"></span>
                  Moje płatności
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/parcels">
                  <span data-feather="file"></span>
                 Sprawdź status paczki
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/printwaybill">
                  <span data-feather="file"></span>
                Drukuj list przewozowy ( )
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/parcelhistory">
                  <span data-feather="file"></span>
               Historia wysłanych paczek
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav-last"  to="/changepassword">
                  <span data-feather="file"></span>
                  Zmień hasło
                </Link>
              </li>
            </ul>
          </div>
     </nav>
    
        );
        
    }
}
 
export default MyAccoutNav;