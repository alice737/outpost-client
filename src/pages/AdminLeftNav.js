import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DispatcherNav from './DispatcherNav';

import '../pagestyle/dispatcher.css'

class AdminLeftNav extends Component{
    render(){
        return(
          
            
      
        <nav class="col-md-2  d-md-block bg-light sidebar" id="nav-padd">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <Link class="nav-link " id="item-nav" to="/">
                  <span data-feather="home"></span>
                  Aktualności <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link"id="item-nav" to="/">
                  <span data-feather="file"></span>
                  Pracowncy
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="item-nav" to="/paczki">
                  <span data-feather="file"></span>
                  Kurierzy
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="item-nav" to="">
                  <span data-feather="file"></span>
                  Dyspozytorzy
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="item-nav" to="">
                  <span data-feather="file"></span>
                  Dodaj pracownika
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="item-nav"  to="">
                  <span data-feather="file"></span>
                  Zmień uprawnienia
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="item-nav"  to="">
                  <span data-feather="file"></span>
                 Statystyki
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" id="item-nav"  to="">
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