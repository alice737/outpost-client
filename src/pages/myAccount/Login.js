

import React, { Component } from 'react'

import MyAccountNav from './MyAccountNav'
import NavbarDetail from '../NavbarDetail'
import {  Redirect } from 'react-router'
import LoginForm from './LoginForm';

class Login extends Component {
    

    isAuthenticated(){
        const token = localStorage.getItem('token');
    //    console.log(token.length);
   return token && token.length>10;
    }
   
handleSuccessfulLogin(){
    this.setState();
    this.forceUpdate()
}
    render() {

        const isArleadyAuthenticated = this.isAuthenticated();
       // console.log(isArleadyAuthenticated);
        return (
            <div>
                  <NavbarDetail />
            <div className="container-fluid" id="container-wi">
            <div className="row">
            {isArleadyAuthenticated ? <Redirect to={{pathname: '/myaccount'}}/>:
               (<LoginForm onSuccessfulLogin={this.handleSuccessfulLogin.bind(this)} /> )}

                     
                    </div>

                </div>
        
            </div>
        );
    }
}
export default Login ;