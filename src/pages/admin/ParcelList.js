import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
class ParcelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parcels: []
        };
    }

    componentDidMount() {
        axios.get('http://193.33.111.170:8080/admin/getParcels')
            .then(response => {
                this.setState({
                    parcels: response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))

    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        //  let role=decode(token).role;
        if (token && token.length > 10) {
            let role = decode(token).roles;
            console.log(role)
            if (role === 'ROLE_ADMIN') {
                return role;
            } else {
                return !token && token.length > 10;

            }

        } else {
            return token && token.length > 10;
        }

    }

    render() {
        const isArleadyAuthenticated = this.isAuthenticated();
        return (


            <div>
                {(isArleadyAuthenticated === 'ROLE_ADMIN') ?
                    (<div className="container-fluid" id="container-wi">
                        <div className="row">
                            <DispatcherNav />
                            <AdminLeftNav />
                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                    <h1 id="nav-padd" className="h2">Paczki</h1>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                
                                                <th>Imie Odbiorcy</th>
                                                <th>Nazwisko Odbiorcy</th>
                                                <th>Telefon Odbiorcy</th>
                                                <th>Email Odbiorcy</th>
                                                <th>Gabaryt</th>
                                                <th>Waga</th>
                                                <th>Status</th>
                                                <th>Numer Paczki</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.parcels.map((item, index) => (
                                                <tr key={index}>
                                                    {/* <td> {item.waybill.sender} </td> */}
                                                    <td> {item.waybill.recipient.name}</td>
                                                    <td> {item.waybill.recipient.surname}</td>
                                                    <td> {item.waybill.recipient.telNumber}</td>
                                                    <td> {item.waybill.recipient.email}</td>
                                                    <td> {item.gauge}</td>
                                                    <td> {item.weight}</td>
                                                    <td> {item.status[item.status.length - 1].status} </td>
                                                    <td> {item.id}</td>

                                                </tr>
                                            ))}

                                            {/* <div key={index}>Item {item.personalia.name} {item.surname}</div>; */}
                                        </tbody>
                                    </table>
                                </div>

                            </main>
                        </div>
                    </div>) :
                    (<Redirect to={{ pathname: '/login' }} />)}
            </div>


        );

    }
}

export default ParcelList;