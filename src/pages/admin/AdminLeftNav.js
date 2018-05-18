import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../pagestyle/dispatcher.css'


class AdminLeftNav extends Component{
    render(){
        return(
          
            
      
        <nav className="col-md-2  d-md-block bg-light sidebar" id="nav-padd">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li class="nav-item">
                <Link className="nav-link " id="item-nav" to="/admin">
                  <span data-feather="home"></span>
                  Aktualności <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"id="item-nav" to="/Awszyscy">
                  <span data-feather="file"></span>
                  Pracownicy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/Akurierzy">
                  <span data-feather="file"></span>
                  Kurierzy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="Adyspozytorzy">
                  <span data-feather="file"></span>
                  Dyspozytorzy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/Aadministratorzy">
                  <span data-feather="file"></span>
                 Administratorzy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/add">
                  <span data-feather="file"></span>
                  Dodaj nowego pracownika
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/Aedycja">
                  <span data-feather="file"></span>
                  Edytuj dane pracownika
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav" to="/Ausuwanie">
                  <span data-feather="file"></span>
                  Usun pracownika
                </Link>
              </li>

              <li className="nav-item">
                <Link class="nav-link" id="item-nav"  to="">
                  <span data-feather="file"></span>
                  Zmień uprawnienia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav"  to="">
                  <span data-feather="file"></span>
                 Statystyki
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="item-nav"  to="">
                  <span data-feather="file"></span>
                 Ustawienia
                </Link>
              </li>
            
            
            
            </ul>
          </div>
        

     </nav>
    
        );
        
    }
}
 
export default AdminLeftNav;