import React, { Component } from 'react';
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'
import axios from 'axios'
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password1: '',
            password2: ''


        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(event) {
        const token = localStorage.getItem('token');
        let id = decode(token).user_id;
        event.preventDefault();
        axios.post('http://193.33.111.170:8080/user/changePassword', {

          login: this.state.password1,
           pass: this.state.password2

        }).then(function (response) {
            // this.setState();
            // this.forceUpdate();
            console.log("ok");
            alert('Hasło zmienione')
        }).catch(function (error) {
            alert('Sprawdź czy dane są poprawne, sproboj jeszcze raz')
            console.log(error);

        });

    }

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
    handleChange(e) {
        if (e.target.id === 'password1') {
            this.setState({ password1: e.target.value });
        } else if (e.target.id === 'password2') {
            this.setState({ password2: e.target.value });
        }
    }
    render() {

        var formStyle = {
            maxWidth: 650
        };
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
                                    <h1 id="nav-padd" className="h2">Zmień hasło </h1>

                                </div>

                                <form className="form-signin" style={formStyle} onSubmit={this.handleSubmit}>



                                    <div className="form-group">
                                        <label >Nowe hasło</label>
                                        <input type="text" className="form-control" id="password1" placeholder="Login" onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label >Powtorz nowe hasło</label>
                                        <input type="text" className="form-control" id="password2" placeholder="Nowe hasło" onChange={this.handleChange} required />
                                    </div>

                                    <input type="submit" className="btn btn-primary" value="Zapisz" />
                                </form>

                            </main>
                        </div>
                    </div>) :
                    (<Redirect to={{ pathname: '/login' }} />)}
            </div>
        );
    }
}
export default ChangePassword;