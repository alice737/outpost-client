import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
class EditAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            id: "",
            email: "",
            name: '',
            surname: '',
            telNumber: '',
            street: '',
            street_number: '',
            house_number: '',
            city: '',
            postal_code: '',
            wait: 'Czekamy'

        };


        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentWillMount() {
        const token = localStorage.getItem('token');
        let id=decode(token).user_id;
        let url = 'http://localhost:8080/user/'+id+'/details';
        axios.get(url)
            .then(response => {
                this.setState({
                    user: response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))

    }
    handleSubmit(event) {
        const token = localStorage.getItem('token');
        let id=decode(token).user_id;
    
        event.preventDefault();
        axios.post('http://localhost:8080/user/' + id + '/editUser', {


            name: this.name.value,
            surname: this.surname.value,
            telNumber: this.telNumber.value,
            email: this.email.value,
            street: this.street.value,
            street_number: this.street_number.value,
            house_number: this.house_number.value,
            city: this.city.value,
            postal_code: this.postal_code.value

        }).then(function (response) {
            console.log("ok");
            alert('Edycja przebiegła pomyślnie ')
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
    render() {
        const u = this.state.user;
        console.log(u.name)
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
                                    <h1 id="nav-padd" className="h2">Edytuj dane</h1>
                                </div>
                                <div className="container">
                                    <form onSubmit={this.handleSubmit} className="form-signin">

                                        {u.name ?
                                            (<div >

                                                <div className="form-group">
                                                    <label >Imie</label>
                                                    <input ref={(input) => this.name = input} defaultValue={this.state.user.name} type="text" autoComplete='name' id="name" className="form-control" required />
                                                </div>
                                                <div className="form-group">
                                                    <label >Nazwisko</label>
                                                    <input ref={(input) => this.surname = input} defaultValue={this.state.user.surname} type="text" autoComplete='family-name' id="surname" className="form-control" required />
                                                </div>

                                                <div className="form-group">
                                                    <label >Telefon</label>
                                                    <input ref={(input) => this.telNumber = input} defaultValue={this.state.user.telNumber} type="text" autoComplete='' id="telNumber" className="form-control" required />
                                                </div>
                                                <div className="form-group">
                                                    <label >Email</label>
                                                    <input ref={(input) => this.email = input} defaultValue={this.state.user.email} type="text" autoComplete='address-line2' id="email" className="form-control" required />
                                                </div>
                                                <div className="form-group">
                                                    <label >Ulica</label>
                                                    <input ref={(input) => this.street = input} defaultValue={this.state.user.address.street} type="text" autoComplete='address-line2' id="street" className="form-control" required />
                                                </div>
                                                <div className="form-group">
                                                    <label >Numer ulicy</label>
                                                    <input ref={(input) => this.street_number = input} defaultValue={this.state.user.address.street_number} type="text" autoComplete='address-line2' id="street_number" className="form-control" required />
                                                </div>
                                                <div className="form-group">
                                                    <label >Numer domu </label>
                                                    <input ref={(input) => this.house_number = input} defaultValue={this.state.user.address.house_number} type="text" autoComplete='address-line1' id="house_number" className="form-control" required />
                                                </div>
                                                <div className="form-group">
                                                    <label >Miasto</label>
                                                    <input ref={(input) => this.city = input} defaultValue={this.state.user.address.city} type="text" autoComplete='address-line2' id="city" className="form-control" required />
                                                </div>
                                                <div className="form-group">
                                                    <label >Kod pocztowy</label>
                                                    <input ref={(input) => this.postal_code = input} defaultValue={this.state.user.address.postal_code} type="text" autoComplete='postal-code' id="postal_code" className="form-control" required />
                                                </div>


                                                <div className="text-center mt-4">

                                                    <input className="btn btn-primary my-3" type="submit" value="Prześlij" />
                                                </div>
                                            </div>) :
                                            ('Wait...')}

                                    </form>



                                </div>

                            </main>
                        </div>
                    </div>) :
                    (<Redirect to={{ pathname: '/login' }} />)}
            </div>
        );

    }
}
export default EditAccount;