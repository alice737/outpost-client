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
        axios.get('http://193.33.111.170/admin/administrators')
            .then(response => {
                this.setState({
                    administrators: response.data
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

                                                <td><Link to={`/user/administrators/${item.id}`}><button>Więcej</button></Link></td>
                                            </tr>
                                        ))}

                                        {/* <div key={index}>Item {item.personalia.name} {item.surname}</div>; */}
                                    </tbody>
                                </table>
                                <Link className="nav-link" id="item-nav" to="/addemployee">
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