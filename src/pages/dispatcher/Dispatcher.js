import React, { Component } from 'react'
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';
import DispatcherContent from './DispatcherContent';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';

class Dispatcher extends Component{
    isAuthenticated() {
        const token = localStorage.getItem('token');
        //  let role=decode(token).role;
        if (token && token.length > 10) {
            let role = decode(token).roles;
            console.log(role)
            if (role === 'ROLE_DISPATCHER') {
                return role;
            } else {
                return !token && token.length > 10;

            }

        } else {
            return token && token.length > 10;
        }

    }
    render() {
        const isArleadyAuthenticated = this.isAuthenticated();
        return (
            <div>
                {(isArleadyAuthenticated === 'ROLE_DISPATCHER') ?
                (<div className="container-fluid" id="container-wi">
                <div className="row">
            <DispatcherNav/>
            <LeftNav/>
            <DispatcherContent />
            </div>
            </div>):
            (<Redirect to={{ pathname: '/login' }} />)}
            </div>
        );
        
    }
}
 
export default Dispatcher;