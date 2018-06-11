import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
class Statistic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parcels: [],
            couriers: [],
            dispatchers: [],
            administrators: [],
            
            prepared: [],
            picked_up: [],
            on_way_to_magazine: [],
            on_way_to_reciver: [],
            delivered: [],
            in_magazine:[]
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


        axios.get('http://193.33.111.170:8080/admin/all')
            .then(response => {
                this.setState({
                    couriers: response.data.carriers,
                    dispatchers: response.data.dispatchers,
                    administrators: response.data.administrators

                });

                console.log(response);
            }).catch((err) => console.log(err))
       
        axios.get('http://193.33.111.170:8080/dispatcher/getParcelsByStatus/PREPARED')
            .then(response => {
                this.setState({
                    prepared: response.data

                });

                console.log(response);
            }).catch((err) => console.log(err))

            axios.get('http://193.33.111.170:8080/dispatcher/getParcelsByStatus/PICKED_UP')
            .then(response => {
                this.setState({
                    picked_up: response.data

                });

                console.log(response);
            }).catch((err) => console.log(err))
            axios.get('http://193.33.111.170:8080/dispatcher/getParcelsByStatus/ON_WAY_TO_MAGAZINE')
            .then(response => {
                this.setState({
                    on_way_to_magazine: response.data

                });

                console.log(response);
            }).catch((err) => console.log(err))

            axios.get('http://193.33.111.170:8080/dispatcher/getParcelsByStatus/ON_WAY_TO_RECEIVER')
            .then(response => {
                this.setState({
                    on_way_to_reciver: response.data

                });

                console.log(response);
            }).catch((err) => console.log(err))
            axios.get('http://193.33.111.170:8080/dispatcher/getParcelsByStatus/DELIVERED')
            .then(response => {
                this.setState({
                    delivered: response.data

                });

                console.log(response);
            }).catch((err) => console.log(err))
            axios.get('http://193.33.111.170:8080/dispatcher/getParcelsByStatus/DELIVERED')
            .then(response => {
                this.setState({
                    in_magazine: response.data

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
        let styl = {
            width: 600,
            margin: 20

        };
        let toLeft = {
            float: 'left'
        };
        let toRight = {
            textAlign: 'right'
        };

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
                                    <h1 id="nav-padd" className="h2">Statystyki </h1>
                                </div>
                                <div class="card" style={styl}>
                                    <ul class="list-group list-group-flush" style={toLeft} >
                                   
                                        <li class="list-group-item"><div style={toLeft}>Ilośc zarejestrowanych paczek w systemie</div><div style={toRight}>{this.state.parcels.length} </div> </li>
                                        <li class="list-group-item"><div style={toLeft}>Paczki o statusie PREPARED </div><div style={toRight}>{this.state.prepared.length} </div> </li>
                                        <li class="list-group-item"><div style={toLeft}>Paczki o statusie PICKED_UP,</div><div style={toRight}>{this.state.picked_up.length} </div> </li>
                                        <li class="list-group-item"><div style={toLeft}>Paczki o statusie ON_WAY_TO_MAGAZINE</div><div style={toRight}>{this.state.on_way_to_magazine.length} </div> </li>
                                        <li class="list-group-item"><div style={toLeft}>Paczki o statusie IN_MAGAZINE</div><div style={toRight}>{this.state.in_magazine.length} </div> </li>
                                        <li class="list-group-item"><div style={toLeft}>Paczki o statusie ON_WAY_TO_RECEIVER</div><div style={toRight}>{this.state.on_way_to_reciver.length} </div> </li>
                                        <li class="list-group-item"><div style={toLeft}>Paczki o statusie DELIVERED</div><div style={toRight}>{this.state.delivered.length} </div> </li>
                                      
                                        <li class="list-group-item"><div style={toLeft}>Wszyscy pracownicy</div><div style={toRight}>{this.state.couriers.length + this.state.dispatchers.length + this.state.administrators.length} </div> </li>
                                        <li class="list-group-item"><div style={toLeft}>Kurierzy</div><div style={toRight}>{this.state.couriers.length} </div> </li>
                                        <li class="list-group-item"><div style={toLeft}>Dyspozytorzy</div><div style={toRight}>{this.state.dispatchers.length} </div> </li>
                                        <li class="list-group-item"><div style={toLeft}>Adminitratorzy</div><div style={toRight}>{this.state.administrators.length} </div> </li>
                                    </ul>
                                </div>
                            </main>
                        </div>
                    </div>) :
                    (<Redirect to={{ pathname: '/login' }} />)}
            </div>
        );
    }
}

export default Statistic;