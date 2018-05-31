import React,{Component} from 'react';
import MyAccountNav from './MyAccountNav'
import DispatcherNav from '../dispatcher/DispatcherNav';
class MyAccount extends Component{
    render(){
      
        return(
            <div>
            <div className="container-fluid" id="container-wi">
            <div className="row">  <DispatcherNav />
            <MyAccountNav />
           
            </div>
            </div>
            </div>
            
      
        );
    }
}
export default MyAccount;