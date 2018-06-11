import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';

axios.defaults.headers.post['Accept'] ='application/json';
axios.defaults.headers.post['Content-Type'] ="application/json; charset=UTF-8";



class Administrators extends Component {
    constructor(props) {
        super(props);
        this.state = {
            administrators: []
        };
    }

    componentDidMount() {
        axios.get('http://193.33.111.170:8080/admin/administrators')
            .then(response => {
                this.setState({
                    administrators: response.data
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
                                <h1 id="nav-padd" className="h2">Administratorzy</h1>

                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped table-sm">
                                    <thead>
                                        <tr>

                                            <th>Id</th>
                                            <th>Imie</th>
                                            <th>Nazwisko</th>
                                            <th>Szczegoły</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.administrators.map((item, index) => (
                                            <tr key={index}>
                                                <td> {item.id}</td>
                                                <td> {item.personalia.name}</td>
                                                <td> {item.personalia.surname}</td>

                                                <td><Link to={`/user/administrators/${item.id}`}>
                                                <span class="hint--right" aria-label="Więcej!"><i class="fa fa-info fa-x red-text" aria-hidden="true"></i></span>
                                                </Link></td>
                                            </tr>
                                        ))}

                                        {/* <div key={index}>Item {item.personalia.name} {item.surname}</div>; */}
                                    </tbody>
                                </table>
                                
                            </div>
                        </main>
                    </div>
                </div>):
                  (<Redirect to={{ pathname: '/login' }} />)}
            </div>


        );

    }
}

export default Administrators;