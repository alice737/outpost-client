import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';
import { Link } from 'react-router-dom';

import axios from 'axios';



class Administrators extends Component {
    constructor(props) {
        super(props);
        this.state = {
            administrators: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/employee/administrators')
            .then(response => {
                this.setState({
                    couriers: response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))

    }


    render() {
        return (


            <div>
                <div className="container-fluid" id="container-wi">
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

                                        <th>Imie</th>
                                        <th>Nazwisko</th>
                                        <th>Telefon</th>
                                        <th>Ulica</th>
                                        <th>Numer ulicy</th>
                                        <th>Numer domu</th>
                                        <th>Miasto</th>
                                        <th>Kod pocztowy</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.administrators.map((item, index) => (
                                        <tr key={index}>
                                            <td> {item.personalia.name}</td>
                                            <td> {item.personalia.surname}</td>
                                            <td> {item.personalia.telNumber}</td>
                                            <td> {item.personalia.address.street}</td>
                                            <td> {item.personalia.address.street_number}</td>
                                            <td> {item.personalia.address.house_number}</td>
                                            <td> {item.personalia.address.city}</td>
                                            <td> {item.personalia.address.postal_code}</td>

                                        </tr>
                                    ))}

                                    {/* <div key={index}>Item {item.personalia.name} {item.surname}</div>; */}
                                </tbody>
                            </table>
                            <Link className="nav-link" id="item-nav" to="/add">
                            <span class="hint--right" aria-label="Dodaj nowego Administratora!"><i class="fa fa-plus-circle fa-3x red-text" aria-hidden="true"></i></span>
                </Link>
                        </div>
                        </main>
                    </div>
                </div>
            </div>


        );

    }
}

export default Administrators;