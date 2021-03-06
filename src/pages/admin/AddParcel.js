import React, { Component } from 'react';
import axios from 'axios';
import DispatcherNav from '../dispatcher/DispatcherNav';
import { Redirect } from 'react-router'
import decode from 'jwt-decode';
import AdminLeftNav from './AdminLeftNav';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
class AddParcel extends Component {
    constructor(props) {
        super(props);
        this.state = {

            recipientName: '',
            recipientSurname: '',
            recipientTel: '',
            recipientEmail: '',
            recipientStreet: '',
            recipientStreetNumber: '',
            recipientHouseNumber: '',
            recipientCity: '',
            recipientPostalCode: '',
            gauge: '',
            weight: ''

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
    handleChange(e) {

        if (e.target.id === 'recipientName') {
            this.setState({ recipientName: e.target.value });
        } else if (e.target.id === 'recipientSurname') {
            this.setState({ recipientSurname: e.target.value });
        } else if (e.target.id === 'recipientTel') {
            this.setState({ recipientTel: e.target.value });
        } else if (e.target.id === 'recipientStreet') {
            this.setState({ recipientStreet: e.target.value });
        } else if (e.target.id === 'recipientStreetNumber') {
            this.setState({ recipientStreetNumber: e.target.value });
        } else if (e.target.id === 'recipientHouseNumber') {
            this.setState({ recipientHouseNumber: e.target.value });
        } else if (e.target.id === 'recipientCity') {
            this.setState({ recipientCity: e.target.value });
        } else if (e.target.id === 'recipientPostalCode') {
            this.setState({ recipientPostalCode: e.target.value });
        } else if (e.target.id === 'recipientEmail') {
            this.setState({ recipientEmail: e.target.value });
        }
        else if (e.target.id === 'A') {
            this.setState({ gauge: e.target.value });
        }
        else if (e.target.id === 'weight') {
            this.setState({ weight: e.target.value });
        }
        else if (e.target.id === 'B') {
            this.setState({ gauge: e.target.value });
        }
        else if (e.target.id === 'C') {
            this.setState({ gauge: e.target.value });
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/admin/addParcel', {
         
                recipientName: this.state.recipientName,
                recipientSurname: this.state.recipientSurname,
                recipientTel: this.state.recipientTel,
                recipientEmail: this.state.recipientEmail,
                recipientStreet: this.state.recipientStreet,
                recipientStreetNumber: this.state.recipientStreetNumber,
                recipientCity: this.state.recipientCity,
                recipientHouseNumber: this.state.recipientHouseNumber,        
                recipientPostalCode: this.state.recipientPostalCode,
                gauge: this.state.gauge,
                weight: this.state.weight
               
        
       
        }).then(function (response) {
            console.log("ok");
            alert('Paczka dodana do bazy')
            ///this.setState({ isLoggedIn: "true"});
            //  console.log(this.isLoggedIn)
            // <Redirect push to='/admin'/>;

        }).catch(function (error) {
            alert('Sprawdź czy dane są poprawne, nowy pracownik nie został dodany do bazy sproboj jeszcze raz')
            console.log(error);

        });

    }

    render() {
        var formStyle = {
            maxWidth: 650
        };
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
                                <h1 id="nav-padd" className="h2">Wyślij Paczkę </h1>
                            </div>
                            <form className="form-signin" style={formStyle} onSubmit={this.handleSubmit}>

                                <p>Podaj dane Odbiorcy.</p>
                                <div className="form-group">
                                    <label>Imię </label>
                                    <input type="text" className="form-control" id="recipientName" autoComplete='email' placeholder="Imię" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Nazwisko </label>
                                    <input type="text" className="form-control" id="recipientSurname" autoComplete='address-line1' placeholder="Nazwisko" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" id="recipientEmail" autoComplete='email' placeholder="Email" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Telefon</label>
                                    <input type="text" className="form-control" id="recipientTel" autoComplete='tel' placeholder="Telefon" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Ulica</label>
                                    <input type="text" className="form-control" id="recipientStreet" autoComplete='street-address' placeholder="Ulica" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Numer ulicy</label>
                                    <input type="text" className="form-control" id="recipientStreetNumber" autoComplete='address-line2' placeholder="Numer Ulicy" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Numer domu</label>
                                    <input type="text" className="form-control" id="recipientHouseNumber" autoComplete='address-line1' placeholder="Numer domu" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Miasto</label>
                                    <input type="text" className="form-control" id="recipientCity" autoComplete='address-line2' placeholder="Miasto" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Kod pocztowy</label>
                                    <input type="text" className="form-control" id="recipientPostalCode" autoComplete='postal-code' placeholder="Kod pocztowy" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Waga</label>
                                    <input type="text" className="form-control" id="weight" placeholder="waga" onChange={this.handleChange} required />
                                </div>
                                <label >Gabaryt</label>
                                <div className="form-check">
                                    <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.gauge === "A"} id="A" value="A" /> A </label>
                                </div>
                                <div className="form-check">
                                    <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.gauge === "B"} id="B" value="B" />B </label>
                                </div>
                                <div className="form-check">
                                    <label><input className="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.gauge === "C"} id="C" value="C" /> C </label>
                                </div>
                                <input type="submit" className="btn btn-primary" value="Zapisz" />
                            </form>
                        </main>
                    </div>
                </div>):
                (<Redirect to={{ pathname: '/login' }} />)}
            </div>
        );
    }
}
export default AddParcel;