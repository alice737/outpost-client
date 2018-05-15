import React, { Component } from 'react';
import Prices from './Prices'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Complaint from './Complaint';
import Tracking from './Tracking';
import UserAccount from './UserAccount'
import Transaction from './Transaction';
import Dispatcher from './Dispatcher';
import Couriers from './Couriers';
import Admin from './Admin';
import Parcels from './Parcels';

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



                </div>
            </Router>
        );
    }
}
export default App;