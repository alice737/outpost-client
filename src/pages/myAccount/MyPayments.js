import React, { Component } from 'react';
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'
class MyPayments extends Component {
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
                        <MyAccountNav />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2">Moje płatności </h1>

                            </div>

                            <div class="card" style={styl}>
                                <ul class="list-group list-group-flush" style={toLeft} >
                                    <li class="list-group-item"><div style={toLeft}>Stan konta</div><div style={toRight}>0.00 </div> </li>

                                    <li class="list-group-item"><div style={toLeft} >Stan konta</div><div style={toRight}>Uregulowane </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Kody promocyjne</div><div style={toRight}>brak</div> </li>
                                </ul>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

        );
    }
}
export default MyPayments;