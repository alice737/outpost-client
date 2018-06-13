import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';
import Admin from './Admin';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
import axios from 'axios'
axios.defaults.headers.post['Accept'] ='application/json';
axios.defaults.headers.post['Content-Type'] ="application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            name: '',
            surname: '',
            telNumber: '',
            email: '',
            street: '',
            street_number: '',
            house_number: '',
            city: '',
            postal_code: '',
            isLoggedIn: "false"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(e) {

        if (e.target.id === 'name') {
            this.setState({ name: e.target.value });
        } else if (e.target.id === 'surname') {
            this.setState({ surname: e.target.value });
        } else if (e.target.id === 'carrier') {
            this.setState({ type: e.target.value });
        } else if (e.target.id === 'dispatcher') {
            this.setState({ type: e.target.value });
        }  else if (e.target.id === 'telNumber') {
            this.setState({ telNumber: e.target.value });
        } else if (e.target.id === 'street') {
            this.setState({ street: e.target.value });
        } else if (e.target.id === 'street_number') {
            this.setState({ street_number: e.target.value });
        } else if (e.target.id === 'house_number') {
            this.setState({ house_number: e.target.value });
        } else if (e.target.id === 'city') {
            this.setState({ city: e.target.value });
        } else if (e.target.id === 'postal_code') {
            this.setState({ postal_code: e.target.value });
        }else if (e.target.id === 'email') {
            this.setState({ email: e.target.value });
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/admin/addEmployee', {
      
                type: this.state.type,
                name: this.state.name,
                surname: this.state.surname,
                email: this.state.email,
                telNumber: this.state.telNumber,
                street: this.state.street,
                street_number: this.state.street_number,
                house_number: this.state.street_number,
                city: this.state.city,
                postal_code: this.state.postal_code
    
        }).then(function (response) {
            console.log("ok");
            alert('Nowy pracownik dodany do bazy')
        }).catch(function (error) {
            alert('Sprawdź czy dane są poprawne, nowy pracownik nie został dodany do bazy sproboj jeszcze raz')
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
                                <h1 id="nav-padd" className="h2">Dodaj nowego pracownika</h1>

                            </div>
                            <div className="container">

                                <form onSubmit={this.handleSubmit} className="form-signin">
                                    <div className="form-group">
                                        <label >Imie</label>
                                        <input type="text" autoComplete='name' id="name" className="form-control" onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label >Nazwisko</label>
                                        <input type="text" autoComplete='family-name' id="surname" className="form-control" onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label >Telefon</label>
                                        <input type="text" autoComplete='address-line1' id="telNumber" className="form-control" onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label >Email</label>
                                        <input type="text" autoComplete='email' id="email" className="form-control" onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label >Ulica</label>
                                        <input type="text" autoComplete='address-line2' id="street" className="form-control" onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label >Numer ulicy</label>
                                        <input type="text" autoComplete='address-line2' id="street_number" className="form-control" onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label >Numer domu </label>
                                        <input type="text" autoComplete='address-line1' id="house_number" className="form-control" onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label >Miasto</label>
                                        <input type="text" autoComplete='address-line2' id="city" className="form-control" onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label >Kod pocztowy</label>
                                        <input type="text" autoComplete='postal-code' id="postal_code" className="form-control" onChange={this.handleChange} required />
                                    </div>
                                    <div className="form-check">
                                        <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.type === "carrier"} id="carrier" value="carrier" /> Kurier </label>
                                    </div>
                                    <div className="form-check">
                                        <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.type === "dispatcher"} id="dispatcher" value="dispatcher" /> Dyspozytor </label>
                                    </div>
                                   
                                    <div className="text-center mt-4">
                                        <input className="btn btn-primary my-3" type="submit" value="Prześlij" >
                                        </input>
                                    </div>
                                </form>



                            </div>

                        </main>
                    </div>
                </div>):
                (<Redirect to={{ pathname: '/login' }} />)}
            </div>
        );

    }
}



export default AddEmployee;