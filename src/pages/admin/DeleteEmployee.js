import React, {Component} from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';

class DeleteEmployee extends Component{
    render(){
        return( 

            <div>
            <div className="container-fluid" id="container-wi">
           <div className="row">
            <DispatcherNav/>
            <AdminLeftNav />
           
       </div>
       </div>
       </div>

        );
    }
}

export default DeleteEmployee;