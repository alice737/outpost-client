import React, { Component } from 'react';
import Prices from './Prices'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Complaint from './Complaint';
import Tracking from './Tracking';
import MyAccount from './MyAccount'

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
import MyPayments from './MyPayments';
import MyParcels from './MyParcels';
import SendParcel from './SendParcel';
import ChangePassword from './ChangePassword';
//import Statistic from './admin/Statistic'

class App extends Component {
    render() {
        return (

            <Router>
                <div>

                    <Route exact path="/" component={Home} />
                    <Route path="/prices" component={Prices} />
                    <Route path="/login" component={Login} />
                    <Route path="/track" component={Tracking} />
                    <Route path="/complaint" component={Complaint} />
                    <Route path="/myaccount" component={MyAccount} />
                    <Route path="/payments" component={MyPayments} />
                    <Route path="/parcels" component={MyParcels} />
                    <Route path="/send" component={SendParcel} />
                    <Route path="/changepassword" component={ChangePassword} />
                    <Route path="/dispatcher" component={Dispatcher} />
                    <Route path="/plancarriers" component={Couriers} />
                    <Route path="/planparcels" component={Parcels} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/addemployee" component={AddEmployee} />
                    <Route path="/administrators" component={Administrators} />
                    <Route path="/dispatchers" component={Dispatchers} />
                    <Route path="/carriers" component={CouriersList} />
                    <Route path="/allemployees" component={Employees} />
                    <Route path="/editemployee" component={EditEmployee} />
                    <Route path="/deleteemployee" component={DeleteEmployee} />
                </div>
            </Router>
        );
    }
}
export default App;