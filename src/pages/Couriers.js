import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';
import CourierContent from './CourierContent';

class Couriers extends Component{
    render(){
        return(
            <div>
            <div class="container-fluid" id="container-wi">
            <div className="row">
        <DispatcherNav/>
        <LeftNav/>
        <CourierContent />
        </div>
        </div>
        </div>
        );
        
    }
}
 
export default Couriers;