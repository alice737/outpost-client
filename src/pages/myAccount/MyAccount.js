import React, { Component } from 'react';
import MyAccountNav from './MyAccountNav'
import DispatcherNav from '../dispatcher/DispatcherNav';
import { Redirect } from 'react-router-dom'
import decode from 'jwt-decode';
class MyAccount extends Component {
    isAuthenticated() {
        const token = localStorage.getItem('token');
        //  let role=decode(token).role;
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

    render() {
        const isArleadyAuthenticated = this.isAuthenticated();
        let data = new Date();
        return (
            <div>
                {(isArleadyAuthenticated === 'ROLE_USER') ?
                    (<div className="container-fluid" id="container-wi">
                        <div className="row">
                            <DispatcherNav />
                            <MyAccountNav />
                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                    <h1 id="nav-padd" className="h2">Aktualności</h1>
                                </div>
                                <h2> Dziś jest {data.toLocaleDateString()} r</h2>
                            </main>
                        </div>

                    </div>) :
                    (<Redirect to={{ pathname: '/login' }} />)}
            </div>


        );
    }
}
export default MyAccount;