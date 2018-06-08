import React, { Component } from 'react';
import Prices from './Prices'
import Registration from './Registration'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Complaint from './Complaint';
import Tracking from './Tracking';
import MyAccount from './myAccount/MyAccount'
import Login from './myAccount/Login'
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
import MyPayments from './myAccount/MyPayments';
import MyParcels from './myAccount/MyParcels';
import SendParcel from './myAccount/SendParcel';
import ChangePassword from './myAccount/ChangePassword';
import AddParcel from './admin/AddParcel'
import User from './admin/User';
import EditAccount from './myAccount/EditAccount';
import ParcelList from './admin/ParcelList';
import PrintWaybill from './myAccount/PrintWaybill';
import DragParcel from './parcel/DragParcel';
import ParcelHistory from './myAccount/ParcelHistory'
//import Statistic from './admin/Statistic'
// import { requireAuth } from './utils/AuthService';
import CreatePlan from './dispatcher/CreatePlan'
import ChangeStatus from './admin/ChangeStatus';
import Statistic from './admin/Statistic';
import Carrier from './carrier/Carrier';
import CarrierChangeStatus from './carrier/CarrierChangeStatus';
import ShiftParcels from './carrier/ShiftParcels';
import CouriersToShift from './parcel/CouriersToShift'
import Shifts from './dispatcher/Shifts';
import CreateShift from './dispatcher/CreateShift';
import CarriersInShift from './dispatcher/CarriersInShift'
class App extends Component {
    render() {
        return (

            <Router >
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/prices" component={Prices} />
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={Login} />
                    <Route path="/track" component={Tracking} />
                    <Route path="/complaint" component={Complaint} />
                    <Route path="/myaccount" component={MyAccount} />
                    <Route path="/payments" component={MyPayments} />
                    <Route path="/parcels" component={MyParcels} />
                    <Route path="/editaccount" component={EditAccount} />
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
                    <Route path="/editemployee/:type/:id" component={EditEmployee} />
                    <Route path="/user/:type/:id" component={User} />
                    <Route path="/addparcel" component={AddParcel} />
                    <Route path="/parcellist" component={ParcelList} />
                    <Route path="/printwaybill" component={PrintWaybill} />
                    <Route path="/drag" component={DragParcel} />
                    <Route path="/parcelhistory" component={ParcelHistory} />
                    <Route path="/createplan" component={CreatePlan} />
                    <Route path="/changestatus" component={ChangeStatus} />
                    <Route path="/statistic"component={Statistic}/>
                    <Route path="/carrier"component={Carrier}/>
                    <Route path="/carrierchangestatus"component={CarrierChangeStatus}/>
                    <Route path="/shiftparcels" component={ShiftParcels}/>
                    <Route path="/courierToShift" component={CouriersToShift}/>
                    <Route path="/shifts" component={Shifts}/>
                    <Route path="/createshift" component={CreateShift}/>
                   <Route path="/courierInShift/:id" component={CarriersInShift}/>
                </div>
            </Router>
        );
    }
}
export default App;