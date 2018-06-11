import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';
import News from './News';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';

class Admin extends Component{
    isAuthenticated() {
        const token = localStorage.getItem('token');
        //  let role=decode(token).role;
        if (token && token.length > 10) {
            let role = decode(token).roles;
            console.log(role)
            if (role === 'ROLE_ADMIN') {
                return role;
            } else {
                return !token && token.length > 10;

            }

        } else {
            return token && token.length > 10;
        }

    }
    render(){

        const isArleadyAuthenticated = this.isAuthenticated();
        return(
            <div>
                 {(isArleadyAuthenticated === 'ROLE_ADMIN') ?
                 (<div className="container-fluid" id="container-wi">
                <div className="row">
                 <DispatcherNav/>
                 <AdminLeftNav />
              <News/>
            </div>
            </div>):
  (<Redirect to={{ pathname: '/login' }} />)}
            </div>
        
        );
        
    }
}
 
export default Admin;