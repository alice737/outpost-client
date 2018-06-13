import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'
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
        this.alert = this.alert.bind(this);
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        let id = decode(token).user_id;
        axios.get('http://localhost:8080/user/' + id + '/myParcels')
            .then(response => {
                this.setState({
                    parcels: response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))

    }

    isAuthenticated() {
        const token = localStorage.getItem('token');
        let role = decode(token).role;
        if (token && token.length > 10) {
            let role = decode(token).roles;
            console.log(role)
            if (role === 'ROLE_USER') {
                return role;
            } else {
                return !token && token.length > 10;

            }

        } else {
            return token && token.length > 10;
        }

    }
    alert(alert) {


        if (alert === 'PICKED_UP') {
            return 'Paczka jest odebrana';
        } else if (alert === 'ON_WAY_TO_MAGAZINE') {
            return 'Paczka jest w drodze do magazynu';
        } else if (alert === 'IN_MAGAZINE') {
            return 'Paczka jest w magazynie';
        } else if (alert === 'ON_WAY_TO_RECEIVER') {
            return 'Paczka jest w drodze do odbiorcy';
        } else if (alert === 'DELIVERED') {
            return 'Paczka jest dostarczona';
        } else if (alert === "PREPARED") {
            return 'Paczka jest przygotowana';
        }
    }
    render() {
        const isArleadyAuthenticated = this.isAuthenticated();
        return (


            <div>
                {(isArleadyAuthenticated === 'ROLE_USER') ?
                    (<div className="container-fluid" id="container-wi">
                        <div className="row">
                            <DispatcherNav />
                            <MyAccountNav />
                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                    <h1 id="nav-padd" className="h2">Historia wysłanych paczek</h1>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th>Numer paczki</th>
                                                <th>Imie Odbiorcy</th>
                                                <th>Nazwisko Odbiorcy</th>
                                                <th>Status</th>
                                                <th>Drukuj list przewozowy</th>
                                                <th>Więcej</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.parcels.map((item, index) => (
                                                <tr key={index}>
                                                    <td> {item.id}</td>
                                                    <td> {item.waybill.recipient.name}</td>
                                                    <td> {item.waybill.recipient.surname}</td>
                                                    <td> {this.alert(item.status[item.status.length - 1].status)} </td>
                                                    <td><Link to={`/printwaybill/${item.id}`}>
                                                        <span class="hint--right" aria-label="Drukuj!"><i className="fa fa-file-pdf-o fa-3x red-text" aria-hidden="true"></i></span>
                                                    </Link></td>
                                                    <td><Link to={`/parceldetails/${item.id}`}>
                                                        <span class="hint--right" aria-label="Więcej!"><i class="fa fa-info fa-2x red-text" aria-hidden="true"></i></span>
                                                    </Link></td>

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