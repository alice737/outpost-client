import React,{Component} from 'react';
import UserNav from './UserNav';
import Footer from './Footer'
class SendParcel extends Component{
    render(){
        var formStyle = {
            maxWidth: 650
          };
        return(
            <div>

            <UserNav />
            <h1></h1>
            <h1></h1>
            <form className="form-signin" style={formStyle} onSubmit={this.handleSubmitRegister}>
                                <h1> Wyslij paczke </h1>
                                <p>Podaj dane.</p>
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
                               
                                <input type="submit" className="btn btn-primary" value="Zapisz" />
                            </form>
            <Footer />
        </div>
        );
    }
}
export default SendParcel;