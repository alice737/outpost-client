import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';
import axios from 'axios';

class Statistic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parcels: [],
            couriers: [],
            dispatchers: [],
            administrators: []
          
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
        return (
            <div>
                <div className="container-fluid" id="container-wi">
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
                                    <li class="list-group-item"><div style={toLeft}>Wszyscy pracownicy</div><div style={toRight}>{this.state.couriers.length+this.state.dispatchers.length+this.state.administrators.length} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Kurierzy</div><div style={toRight}>{this.state.couriers.length} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Dyspozytorzy</div><div style={toRight}>{this.state.dispatchers.length} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Adminitratorzy</div><div style={toRight}>{this.state.administrators.length} </div> </li>
                                </ul>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistic;