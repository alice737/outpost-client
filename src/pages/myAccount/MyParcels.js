import React, { Component } from 'react';
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'

class MyParcels extends Component {
    render() {
        return (
            <div>

          <div className="container-fluid" id="container-wi">
                    <div className="row">
                        <DispatcherNav />
                        <MyAccountNav />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2">Moje przesyłki</h1>

                            </div>
                <div class="card-body text-center">
                    <form class="form-inline active-cyan-3 active-cyan-4">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                <div class="card-body text-center">
                    <h5> Nie znaleziono przesyłek </h5>
                </div>
           
                </main>
                    </div>
                </div>
            </div>
        );
    }
}
export default MyParcels;