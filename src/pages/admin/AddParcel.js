import React, { Component } from 'react';

import DispatcherNav from '../dispatcher/DispatcherNav';

import AdminLeftNav from './AdminLeftNav';
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


    handleChange(e) {

        if (e.target.id === 'recipientName') {
            this.setState({ name: e.target.value });
        } else if (e.target.id === 'recipientSurname') {
            this.setState({ surname: e.target.value });
        } else if (e.target.id === 'recipientTel') {
            this.setState({ telNumber: e.target.value });
        } else if (e.target.id === 'recipientStreet') {
            this.setState({ street: e.target.value });
        } else if (e.target.id === 'recipeintStreetNumber') {
            this.setState({ street_number: e.target.value });
        } else if (e.target.id === 'recipientHouseNumber') {
            this.setState({ house_number: e.target.value });
        } else if (e.target.id === 'recipientCity') {
            this.setState({ city: e.target.value });
        } else if (e.target.id === 'recipientPostalCode') {
            this.setState({ postal_code: e.target.value });
        } else if (e.target.id === 'recipientEmail') {
            this.setState({ email: e.target.value });
        }
        else if (e.target.id === 'gauge') {
            this.setState({ email: e.target.value });
        }
        else if (e.target.id === 'weight') {
            this.setState({ email: e.target.value });
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        fetch('http://193.33.111.170:8080/admin/addParcel', {
            method: 'POST',
            body: JSON.stringify({
                recipientName: this.state.recipientName,
                recipientSurname: this.state.recipientSurname,
                recipientEmail: this.state.recipientEmail,
                recipientStreet: this.state.recipientStreet,
                recipientStreetNumber: this.state.recipientStreetNumber,
                recipientCity: this.state.recipientCity,
                recipientTel: this.state.recipientTel,
                recipientPostalCode: this.recipientPostalCode,
                gauge: this.gauge,
                weight: this.weight
            })
            ,
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(function (response) {
            if (!response.ok) {
                alert('Sprawdź czy dane są poprawne, nowy pracownik nie został dodany do bazy sproboj jeszcze raz')
                throw Error(response.statusText);
                // console.log(response.statusText);

            }
            return response;
        }).then(function (response) {
            console.log("ok");
            alert('aczka dodana do bazy')
            ///this.setState({ isLoggedIn: "true"});
            //  console.log(this.isLoggedIn)
            // <Redirect push to='/admin'/>;

        }).catch(function (error) {

            console.log(error);

        });

    }

    render() {
        var formStyle = {
            maxWidth: 650
        };
        return (
            <div>

                <div className="container-fluid" id="container-wi">
                    <div className="row">
                        <DispatcherNav />
                      <AdminLeftNav/>
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
                                    <label >Paczka ilośc</label>
                                    <input type="text" className="form-control" id="gauge" placeholder="ile" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >waga</label>
                                    <input type="text" className="form-control" id="weight" placeholder="waga" onChange={this.handleChange} required />
                                </div>
                                <input type="submit" className="btn btn-primary" value="Zapisz" />
                            </form>
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddParcel;