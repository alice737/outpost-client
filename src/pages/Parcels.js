import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';
import ParcelContent from './ParcelContent';

class Parcels extends Component{
    render(){
        return(
            <div>
            <div className="container-fluid" id="container-wi">
            <div className="row">
        <DispatcherNav/>
        <LeftNav/>
        <ParcelContent />
        </div>
        </div>
        </div>
        );
        
    }
}
 
export default Parcels;