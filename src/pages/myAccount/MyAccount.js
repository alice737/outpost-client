import React,{Component} from 'react';
import MyAccountNav from './MyAccountNav'

class MyAccount extends Component{
    render(){
      
        return(
            <div>
            <div className="container-fluid" id="container-wi">
            <div className="row">
            <MyAccountNav />
           
            </div>
            </div>
            </div>
            
      
        );
    }
}
export default MyAccount;