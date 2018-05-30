

import React, { Component } from 'react'
import NavbarDetail from './NavbarDetail'
import Footer from './Footer'
//import '../pagestyle/login.css'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
      
            name: '',
            surname: '',
            emailRegistration: '',

            telNumber: '',
            street: '',
            street_number: '',
            house_number: '',
            city: '',
            postal_code: '',

            password1: '',
            password2: ''

        };
        this.handleChange = this.handleChange.bind(this);
    
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    }
    handleChange(e) {
        if (e.target.id === 'emailLogin') {
            this.setState({ emailLogin: e.target.value });
        } else if (e.target.id === 'passwordLogin') {
            this.setState({ passwordLogin: e.target.value });
        } else if (e.target.id === 'name') {
            this.setState({ name: e.target.value });
            console.log(this.state.name);
        } else if (e.target.id === 'surname') {
            this.setState({ surname: e.target.value });
        } else if (e.target.id === 'emailRegistration') {
            this.setState({ emailRegistration: e.target.value });
        } else if (e.target.id === 'telNumber') {
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
        } else if (e.target.id === 'password1') {
            this.setState({ password1: e.target.value });
        } else if (e.target.id === 'password2') {
            this.setState({ password2: e.target.value });
        }
    }

    

    handleSubmitRegister(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            //  mode: 'no-cors', // no-cors
            body: JSON.stringify({
                name: this.state.name,
                surname: this.state.surname,
                emailRegistration: this.emailRegistration,
                telNumber: this.state.telNumber,
                street: this.state.street,
                street_number: this.state.street_number,
                house_number: this.state.street_number,
                city: this.state.city,
                postal_code: this.state.postal_code,
                password1: this.state.password1,
                password2: this.state.password2
            })
            ,
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(function(response) {
            if (!response.ok) {
                alert('Wpisany format danych jest niepoprawny.')
                throw Error(response.statusText);
                console.log(response.statusText);
               
            }
            return response;
        }).then(function(response) {
            console.log("ok");
            alert('Zarejestrowany ')
            
        }).catch(function(error) {
        
            console.log(error);
            
        });
    }


    render() {
        return (
            <div>
                <NavbarDetail />
                <div className="container" id="container100">
                    <div className="row">
                       
                        <div className="col">
                            <form className="form-signin" onSubmit={this.handleSubmitRegister}>
                                <h1> Rejestracja</h1>
                                <p>Zapisz się do systemu.</p>
                                <div className="form-group">
                                    <label>Imię</label>
                                    <input type="text" className="form-control" id="name" placeholder="Imię" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Nazwisko</label>
                                    <input type="text" className="form-control" id="surname" placeholder="Nazwisko" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" id="emilRegistration" placeholder="Email" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Telefon</label>
                                    <input type="text" className="form-control" id="telNumber" placeholder="Telefon" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Ulica</label>
                                    <input type="text" className="form-control" id="street" placeholder="Ulica" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Numer ulicy</label>
                                    <input type="text" className="form-control" id="street_number" placeholder="Numer Ulicy" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Numer domu</label>
                                    <input type="text" className="form-control" id="house_number" placeholder="Numer domu" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Miasto</label>
                                    <input type="text" className="form-control" id="city" placeholder="Miasto" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Kod pocztowy</label>
                                    <input type="text" className="form-control" id="postal_code" placeholder="Kod pocztowy" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Hasło</label>
                                    <input type="password" suggested="new-password" className="form-control" id="password1" placeholder="Hasło" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Powtorz Hasło</label>
                                    <input type="password" suggested="new-password" className="form-control" id="password2" placeholder="Powtorz hasło" onChange={this.handleChange} required />
                                </div>
                                <input type="submit" className="btn btn-primary" value="Prześlij" />
                            </form>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}
export default Registration;