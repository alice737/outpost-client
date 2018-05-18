import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';
import DispatcherContent from './DispatcherContent';

class Dispatcher extends Component{
    render(){
        return(
            <div>
                <div className="container-fluid" id="container-wi">
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