import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';


class Parcels extends Component{
    render(){
        return(
            <div>
            <div className="container-fluid" id="container-wi">
            <div className="row">
        <DispatcherNav/>
        <LeftNav/>
         <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 id="nav-padd" className="h2">Paczki</h1>
          
            </div>
  
           

          </main>
        </div>
        </div>
        </div>
        );
        
    }
}
 
export default Parcels;