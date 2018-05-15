import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';
import DispatcherContent from './DispatcherContent';
import CourierContent from './CourierContent';


class Dispatcher extends Component{
    render(){
        return(
            <div>
                <div class="container-fluid" id="container-wi">
                <div className="row">
            <DispatcherNav/>
            <LeftNav/>
            <DispatcherContent />
            </div>
            </div>
            </div>
        );
        
    }
}
 
export default Dispatcher;