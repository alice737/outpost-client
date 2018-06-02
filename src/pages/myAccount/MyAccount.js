import React,{Component} from 'react';
import MyAccountNav from './MyAccountNav'
import DispatcherNav from '../dispatcher/DispatcherNav';
import {Redirect} from 'react-router-dom'
class MyAccount extends Component{
    isAuthenticated(){
        const token = localStorage.getItem('token');
   return token && token.length>10;
    }
    render(){
        const isArleadyAuthenticated = this.isAuthenticated();
        return(
            <div>
            <div className="container-fluid" id="container-wi">
            {!isArleadyAuthenticated ? <Redirect to={{pathname: '/myaccount'}}/>:(
            <div className="row">  <DispatcherNav />
            <MyAccountNav />
           
            </div>
        )}
            </div>
            </div>
            
      
        );
    }
}
export default MyAccount;