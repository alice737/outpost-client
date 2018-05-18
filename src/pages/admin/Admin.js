import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';
import News from './News';


class Admin extends Component{
    render(){

        
        return(
            <div>
                 <div className="container-fluid" id="container-wi">
                <div className="row">
                 <DispatcherNav/>
                 <AdminLeftNav />
              <News/>
            </div>
            </div>
            </div>
        
        );
        
    }
}
 
export default Admin;