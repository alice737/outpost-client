import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import AdminLeftNav from './AdminLeftNav';


class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            name: '',
            surname: '',
            telNumber: '',
            street: '',
            street_number: '',
            house_number: '',
            city: '',
            postal_code: '',

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
        } else if (e.target.id === 'admin') {
            this.setState({ type: e.target.value });
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

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            //  mode: 'no-cors', // no-cors
            body: JSON.stringify({
                type: this.state.type,
                name: this.state.name,
                surname: this.state.surname,
                telNumber: this.state.telNumber,
                street: this.state.street,
                street_number: this.state.street_number,
                house_number: this.state.street_number,
                city: this.state.city,
                postal_code: this.state.postal_code
            })
            ,
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            <div>
                <div className="container-fluid" id="container-wi">
                    <div className="row">
                        <DispatcherNav />
                        <AdminLeftNav />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2">Dodaj nowego pracownika</h1>

                            </div>
                            <div className="container">

                                <form onSubmit={this.handleSubmit}  className="form-signin">
                                    <label >Imie</label>
                                    <input type="text" autoComplete='name' id="name" className="form-control" onChange={this.handleChange} required />
                                    <label >Nazwisko</label>
                                    <input type="text" autoComplete='family-name' id="surname" className="form-control" onChange={this.handleChange} required />
                                    <label >Telefon</label>
                                    <input type="text" autoComplete='address-line1' id="telNumber" className="form-control" onChange={this.handleChange} required />
                                    <label >Ulica</label>
                                    <input type="text" autoComplete='address-line2' id="street" className="form-control" onChange={this.handleChange} required />
                                    <label >Numer ulicy</label>
                                    <input type="text" autoComplete='address-line2' id="street_number" className="form-control" onChange={this.handleChange} required />
                                    <label >Numer domu </label>
                                    <input type="text" autoComplete='address-line1' id="house_number" className="form-control" onChange={this.handleChange} required />
                                    <label >Miasto</label>
                                    <input type="text" autoComplete='address-line2' id="city" className="form-control" onChange={this.handleChange} required />
                                    <label >Kod pocztowy</label>
                                    <input type="text" autoComplete='postal-code' id="postal_code" className="form-control" onChange={this.handleChange} required />
                                    <div class="form-check">
                                    <label><input class="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.type === "carrier"} id="carrier" value="carrier" /> Kurier </label>
                                    </div>
                                    <div class="form-check">
                                    <label><input class="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.type === "dispatcher"} id="dispatcher" value="dispatcher" /> Dyspozytor </label>
                                    </div>
                                    <div class="form-check">
                                    <label><input class="form-check-input" name="group20" type="radio" id="radio122" onChange={this.handleChange} checked={this.state.type === "admin"} id="admin" value="admin" /> Administrator </label>
                                   </div>


                                    <div className="text-center mt-4">
                                        {/* <button className="btn btn-primary" type="submit">Prześlij<i className="fa fa-paper-plane-o ml-2"></i></button> */}
                                        <input class="btn btn-primary my-3" type="submit" value="Prześlij" />
                                    </div>
                                </form>



                            </div>

                        </main>
                    </div>
                </div>
            </div>
        );

    }
}

export default AddEmployee;