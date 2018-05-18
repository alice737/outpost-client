import React, { Component } from 'react';
import Prices from './Prices'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Complaint from './Complaint';
import Tracking from './Tracking';
import UserAccount from './UserAccount'
import Transaction from './Transaction';
import Dispatcher from './dispatcher/Dispatcher';
import Couriers from './dispatcher/Couriers';

import Admin from './admin/Admin';
import Parcels from './dispatcher/Parcels';
import AddEmployee from './admin/AddEmployee'
import Administrators from './admin/Administrators';
import Dispatchers from './admin/Dispatchers';
import CouriersList from './admin/CouriersList'
import Employees from './admin/Employees'
import EditEmployee from './admin/EditEmployee'
import DeleteEmployee from './admin/DeleteEmployee'
//import Statistic from './admin/Statistic'

class App extends Component {
    render() {
        return (

            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/ceny" component={Prices} />
                    <Route path="/login" component={Login} />
                    <Route path="/sledz" component={Tracking} />
                    <Route path="/zglos" component={Complaint} />
                    <Route path="/moje-konto" component={UserAccount} />
                    <Route path="/transakcje" component={Transaction} />
                    <Route path="/dyspozytor" component={Dispatcher} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/kurierzy" component={Couriers} />
                    <Route path="/paczki" component={Parcels} />
                    <Route path="/add" component={AddEmployee} />
                    <Route path="/Aadministratorzy" component={Administrators} />
                    <Route path="/Adyspozytorzy" component={Dispatchers} />
                    <Route path="/Akurierzy" component={CouriersList} />
                    <Route path="/Awszyscy" component={Employees} />
                    <Route path="/Aedycja" component={EditEmployee} />
                    <Route path="/Ausuwanie" component={DeleteEmployee} />









                </div>
            </Router>
        );
    }
}
export default App;