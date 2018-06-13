

import React, { Component } from 'react'
import NavbarDetail from './NavbarDetail'
import Footer from './Footer'
//import '../pagestyle/login.css'
import axios from 'axios'
axios.defaults.headers.post['Accept'] ='application/json';
axios.defaults.headers.post['Content-Type'] ="application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
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

         

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    }
    handleChange(e) {
       if (e.target.id === 'name') {
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
        } 
    }

    

    handleSubmitRegister(event) {
    
        event.preventDefault();
        axios.post('http://localhost:8080/guest/signUp', {
   
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.emailRegistration,
            telNumber: this.state.telNumber,
            street: this.state.street,
            street_number: this.state.street_number,
            house_number: this.state.house_number,
            city: this.state.city,
            postal_code: this.state.postal_code
           
        
        }).then(function (response) {
          
            console.log("ok");
            alert('Zarejestrowany, domyślny login to Imie+Nazwisko, domyślne hasło ImieNazwisko')

            ///this.setState({ isLoggedIn: "true"});
            //  console.log(this.isLoggedIn)
            // <Redirect push to='/admin'/>;

        }).catch(function (error) {
            alert('Sprawdź czy dane są poprawne, sproboj jeszcze raz')
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
                                    <input type="email" className="form-control" id="emailRegistration" placeholder="Email" onChange={this.handleChange} required />
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