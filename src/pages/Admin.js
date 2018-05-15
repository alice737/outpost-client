import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import DispatcherNav from './DispatcherNav';
import AdminLeftNav from './AdminLeftNav';


class Admin extends Component{
    render(){
        return(
            <div>
                 <DispatcherNav/>
                 <AdminLeftNav />
                
            </div>
        );
        
    }
}
 
export default Admin;