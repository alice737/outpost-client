import React, { Component } from 'react'
import { Link } from 'react-router-dom';


import '../../pagestyle/dispatcher.css'

class LeftNav extends Component{
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
                <Link className="nav-link " id="item-nav" to="/dispatcher"  >
                  <span data-feather="home"></span>
                  Aktualności <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"id="item-nav" to="/plancarriers">
                  <span data-feather="file"></span>
                  Kurierzy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/planparcels">
                  <span data-feather="file"></span>
                  Paczki
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/dispatcher">
                  <span data-feather="file"></span>
                  Zmiany
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/dispatcher">
                  <span data-feather="file"></span>
                  Regiony
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav-last"  to="/createplan">
                  <span data-feather="file"></span>
                  Utworz plan
                </Link>
              </li>
            </ul>
          </div>
     </nav>
    
        );
        
    }
}
 
export default LeftNav;