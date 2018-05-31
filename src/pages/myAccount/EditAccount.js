import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import MyAccountNav from './MyAccountNav'
import axios from 'axios';

class EditAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: [],
           id: "",
           email: "", 
            name: '',
            surname: '',
            telNumber: '',
            street: '',
            street_number: '',
            house_number: '',
            city: '',
            postal_code: ''

        };

      
        this.handleSubmit = this.handleSubmit.bind(this);
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
                id: this.props.match.params.id,
                data: {
                name: this.name.value,
                surname: this.surname.value,
                telNumber: this.telNumber.value,
                email: this.email.value,
                street: this.street.value,
                street_number: this.street_number.value,
                house_number: this.house_number.value,
                city: this.city.value,
                postal_code: this.postal_code.value}
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
                                <h1 id="nav-padd" className="h2">Edytuj dane</h1>
                            </div>
                            <div className="container">
                                <form onSubmit={this.handleSubmit} className="form-signin">
                                    {this.state.user.filter(item => item.id == this.props.match.params.id).map((item, index) => (
                                        <div key={index}>

                                            <div className="form-group">
                                                <label >Imie</label>
                                                <input  ref={(input) => this.name = input} defaultValue={item.personalia.name} type="text" autoComplete='name' id="name" className="form-control"  required />
                                            </div>
                                            <div className="form-group">
                                                <label >Nazwisko</label>
                                                <input  ref={(input) => this.surname = input} defaultValue={item.personalia.surname} type="text" autoComplete='family-name' id="surname" className="form-control" required />
                                            </div>
                                            <div className="form-group">
                                                <label >Telefon</label>
                                                <input  ref={(input) => this.telNumber = input} defaultValue={item.personalia.telNumber} type="text" autoComplete='' id="telNumber" className="form-control"  required />
                                            </div>
                                            <div className="form-group">
                                                <label >Email</label>
                                                <input ref={(input) => this.email = input} defaultValue={item.personalia.email} type="text" autoComplete='address-line2' id="email" className="form-control"  required />
                                            </div>
                                            <div className="form-group">
                                                <label >Ulica</label>
                                                <input ref={(input) => this.street = input} defaultValue={item.personalia.address.street} type="text" autoComplete='address-line2' id="street" className="form-control"  required />
                                            </div>
                                            <div className="form-group">
                                                <label >Numer ulicy</label>
                                                <input ref={(input) => this.street_number = input} defaultValue={item.personalia.address.street_number} type="text" autoComplete='address-line2' id="street_number" className="form-control"  required />
                                            </div>
                                            <div className="form-group">
                                                <label >Numer domu </label>
                                                <input ref={(input) => this.house_number = input} defaultValue={item.personalia.address.house_number} type="text" autoComplete='address-line1' id="house_number" className="form-control"  required />
                                            </div>
                                            <div className="form-group">
                                                <label >Miasto</label>
                                                <input ref={(input) => this.city = input} defaultValue={item.personalia.address.city} type="text" autoComplete='address-line2' id="city" className="form-control"  required />
                                            </div>
                                            <div className="form-group">
                                                <label >Kod pocztowy</label>
                                                <input ref={(input) => this.postal_code = input} defaultValue={item.personalia.address.postal_code} type="text" autoComplete='postal-code' id="postal_code" className="form-control"  required />
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