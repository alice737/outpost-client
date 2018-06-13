import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
import axios from 'axios'
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


class ChangeStatus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            packNumber: '',
            packStatus: '',
            value: 'cos'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {

        if (e.target.id === 'packNumber') {
            this.setState({ packNumber: e.target.value });


        } else if (e.target.id === 'PICKED_UP') {
            this.setState({ packStatus: e.target.value });
        } else if (e.target.id === 'ON_WAY_TO_MAGAZINE') {
            this.setState({ packStatus: e.target.value });
        } else if (e.target.id === 'IN_MAGAZINE') {
            this.setState({ packStatus: e.target.value });
        } else if (e.target.id === 'ON_WAY_TO_RECEIVER') {
            this.setState({ packStatus: e.target.value });
        } else if (e.target.id === 'DELIVERED') {
            this.setState({ packStatus: e.target.value });
            console.log(e.target.value);
        }
        //PREPARED, PICKED_UP, ON_WAY_TO_MAGAZINE, IN_MAGAZINE, ON_WAY_TO_RECEIVER, DELIVERED
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.packNumber);
        console.log(this.state.packStatus)
        axios.post('http://localhost:8080/admin/changeStatus', {


            id: this.state.packNumber,
            status: this.state.packStatus
        }).then(function (response) {
            if (!response.ok) {
                alert('Sprawdź czy dane są poprawne sproboj jeszcze raz!!')
                throw Error(response.statusText);
                console.log(response.statusText);

            }
            return response;
        }).then(function (response) {
            console.log("ok");
            alert('Status zmieniony')

        }).catch(function (error) {

            console.log(error);

        });

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
                                    <h1 id="nav-padd" className="h2">Zmień status</h1>

                                </div>
                                <div className="container">
                                    <h2 className="font-weight-bold text-center">Zmiana statusu.</h2>
                                    <h4 className="text-center"> Wpisz numer przesyłki i wybierz nowy status.</h4>
                                    <div className="row">
                                        <form className="form-signin" onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <input className="form-control" id="packNumber" placeholder="Wpisz numer paczki" onChange={this.handleChange} required />
                                                {/* <div class="input-group mb-3">
                                                <select value={this.state.value} onChange={this.handleChange}  id="select" class="custom-select" id="inputGroupSelect02">

                                                    <option   id="PREPARED" value="PREPARED" >PREPARED</option>
                                                    <option  id="PICKED_UP" value="PICKED_UP">PICKED_UP</option>
                                                    <option  id="ON_WAY_TO_MAGAZINE" value="ON_WAY_TO_MAGAZINE">ON_WAY_TO_MAGAZINE</option>
                                                    <option id="IN_MAGAZINE" value="IN_MAGAZINE">IN_MAGAZINE</option>
                                                    <option   id="ON_WAY_TO_RECEIVER" value="ON_WAY_TO_RECEIVER">ON_WAY_TO_RECEIVER</option>
                                                    <option  id="DELIVERED" value="DELIVERED">DELIVERED</option>
                                                </select>

                                            </div>*/}
                                                <div className="form-check">
                                                    <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.packStatus === "PREPARED"} id="PREPARED" value="PREPARED" />PREPARED </label>
                                                </div>
                                                <div className="form-check">
                                                    <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.packStatus === "PICKED_UP"} id="PICKED_UP" value="PICKED_UP" />PICKED_UP</label>
                                                </div>
                                                <div className="form-check">
                                                    <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.packStatus === "ON_WAY_TO_MAGAZINE"} id="ON_WAY_TO_MAGAZINE" value="ON_WAY_TO_MAGAZINE" />ON_WAY_TO_MAGAZINE </label>
                                                </div>
                                                <div className="form-check">
                                                    <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.packStatus === "IN_MAGAZINE"} id="IN_MAGAZINE" value="IN_MAGAZINE" />IN_MAGAZINE </label>
                                                </div>
                                                <div className="form-check">
                                                    <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.packStatus === "ON_WAY_TO_RECEIVER"} id="ON_WAY_TO_RECEIVER" value="ON_WAY_TO_RECEIVER" />ON_WAY_TO_RECEIVER </label>
                                                </div>
                                                <div className="form-check">
                                                    <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.packStatus === "DELIVERED"} id="DELIVERED" value="DELIVERED" />DELIVERED </label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Prześlij</button>

                                        </form>

                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>) :
                    (<Redirect to={{ pathname: '/login' }} />)}
            </div>

        );

    }
}

export default ChangeStatus;