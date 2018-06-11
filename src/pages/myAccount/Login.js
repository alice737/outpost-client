

import React, { Component } from 'react'
import decode from 'jwt-decode';
import MyAccountNav from './MyAccountNav'
import NavbarDetail from '../NavbarDetail'
import {  Redirect } from 'react-router'
import LoginForm from './LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          path: ''

        };
   
    }

    isAuthenticated(){
        const token = localStorage.getItem('token');
        //  let role=decode(token).role;
  if(token && token.length>10)
     {
        let role=decode(token).roles;
      // console.log(role)
        if(role=='ROLE_CICHOPEK'){
            return role;
        }else if(role=='ROLE_USER'){
            return role;
        }else if(role=='ROLE_DISPATCHER'){
            return role;
        }else if(role=='ROLE_CARRIER'){
            return role;
        }else if(role=='ROLE_ADMIN'){
            return role;
        }else {
            return false;
        }
        return token && token.length>10;

     }else{
         return token && token.length>10;
     }
        
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
            {/* {isArleadyAuthenticated ? <Redirect to={{pathname: this.state.path}}/>:
               (<LoginForm onSuccessfulLogin={this.handleSuccessfulLogin.bind(this)} /> )} */}

                  {(() => {  switch (isArleadyAuthenticated) {
          case 'ROLE_CARRIER':   return <Redirect to={{pathname: '/carrier'}}/>;
          case 'ROLE_USER': return <Redirect to={{pathname: '/myaccount'}}/>;
          case "ROLE_ADMIN":  return <Redirect to={{pathname: '/admin'}}/>;
          case "ROLE_DISPATCHER":  return <Redirect to={{pathname: '/dispatcher'}}/>;
       
          case null:     return (<LoginForm onSuccessfulLogin={this.handleSuccessfulLogin.bind(this)} /> )
        }
      })()}

                     
                    </div>

                </div>
        
            </div>
        );
    }
}
export default Login ;