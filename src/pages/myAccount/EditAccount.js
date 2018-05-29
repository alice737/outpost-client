import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'
import axios from 'axios';

class EditAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
            type: '',
            name: '',
            surname: '',
            telNumber: '',
            street: '',
            street_number: '',
            house_number: '',
            city: '',
            postal_code: ''

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
    componentDidMount() {
        let url = 'http://193.33.111.170:8080/admin/all/' + this.props.match.params.type;
        axios.get(url)
            .then(response => {
                this.setState({
                    user: response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))

    }
    handleSubmit(event) {
        //on update 
        event.preventDefault();
        fetch('http://193.33.111.170:8080/admin/all/', {
            method: 'PUT',
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

    }

    render() {
        return (
            <div>
                <div className="container-fluid" id="container-wi">
                    <div className="row">
                    <DispatcherNav />
                        <MyAccountNav />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2">Edytuj dane pracownika</h1>
                            </div>
                            <div className="container">
                                <form onSubmit={this.handleSubmit} className="form-signin">
                                    {this.state.user.filter(item => item.id == this.props.match.params.id).map((item, index) => (
                                        <div key={index}>

                                            <div className="form-group">
                                                <label >Imie</label>
                                                <input defaultValue={item.personalia.name} type="text" autoComplete='name' id="name" className="form-control" onChange={this.handleChange} required />
                                            </div>
                                            <div className="form-group">
                                                <label >Nazwisko</label>
                                                <input defaultValue={item.personalia.surname} type="text" autoComplete='family-name' id="surname" className="form-control" onChange={this.handleChange} required />
                                            </div>
                                            <div className="form-group">
                                                <label >Telefon</label>
                                                <input defaultValue={item.personalia.telNumber} type="text" autoComplete='' id="telNumber" className="form-control" onChange={this.handleChange} required />
                                            </div>
                                            <div className="form-group">
                                                <label >Ulica</label>
                                                <input defaultValue={item.personalia.address.street} type="text" autoComplete='address-line2' id="street" className="form-control" onChange={this.handleChange} required />
                                            </div>
                                            <div className="form-group">
                                                <label >Numer ulicy</label>
                                                <input defaultValue={item.personalia.address.street_number} type="text" autoComplete='address-line2' id="street_number" className="form-control" onChange={this.handleChange} required />
                                            </div>
                                            <div className="form-group">
                                                <label >Numer domu </label>
                                                <input defaultValue={item.personalia.address.house_number} type="text" autoComplete='address-line1' id="house_number" className="form-control" onChange={this.handleChange} required />
                                            </div>
                                            <div className="form-group">
                                                <label >Miasto</label>
                                                <input defaultValue={item.personalia.address.city} type="text" autoComplete='address-line2' id="city" className="form-control" onChange={this.handleChange} required />
                                            </div>
                                            <div className="form-group">
                                                <label >Kod pocztowy</label>
                                                <input defaultValue={item.personalia.address.postal_code} type="text" autoComplete='postal-code' id="postal_code" className="form-control" onChange={this.handleChange} required />
                                            </div>
                                          
                                            <div className="text-center mt-4">
                                               
                                                <input className="btn btn-primary my-3" type="submit" value="Prześlij" />
                                            </div>
                                        </div>
                                    ))}
                                </form>



                            </div>

                        </main>
                    </div>
                </div>
            </div>
        );

    }
}
export default EditAccount;