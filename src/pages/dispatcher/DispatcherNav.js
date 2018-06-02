import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class DispatcherNav extends Component{
  handleLogout(){
localStorage.removeItem('token');
this.forceUpdate();
  }
    render(){
        return(
            <div>
            <header>
              <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to="/" >Out Post</Link>
                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav ml-auto">
                   
                  
                    <li className="nav-item">
                      <Link  to="/" onClick={this.handleLogout.bind(this)} className="nav-link" >WYLOGUJ</Link>
                    </li>
                  </ul>
    
                </div>
              </nav>
            </header>
          </div>
        );
        
    }
}

export default DispatcherNav;
