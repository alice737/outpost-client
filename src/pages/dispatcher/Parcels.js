import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

class Parcels extends Component {
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
            if (role === 'ROLE_DISPATCHER') {
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
                {(isArleadyAuthenticated === 'ROLE_DISPATCHER') ?
                    (<div className="container-fluid" id="container-wi">
                        <div className="row">
                            <DispatcherNav />
                            <LeftNav />
                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                    <h1 id="nav-padd" className="h2">Paczki</h1>

                                </div>

                                <div className="table-responsive">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th>Id</th>   
                                                <th>Waga</th>
                                                <th>Gabaryt</th>
                                                <th>Status</th>
                                                <th>Więcej informacji</th>
                                                

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.parcels.map((item, index) => (
                                                <tr key={index}>
                                                   <td> {item.id}</td>
                                                    <td> {item.weight}</td>
                                                    <td> {item.gauge}</td>
                                                    <td> {item.status[item.status.length - 1].status} </td>
                                                   
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

export default Parcels;