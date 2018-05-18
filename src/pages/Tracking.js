import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom';


class Tracking extends Component {
    constructor(){
        super();
        this.state={
            packNumber:''
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        if (e.target.id === 'packNumber') {
            this.setState({ packNumber: e.target.value });
        } 

    }
    handleSubmit(event){
        alert('A name was submitted: ' + this.state.packNumber);
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            //  mode: 'no-cors', // no-cors
            body: JSON.stringify({
                packNumber: this.state.packNumber
              
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
                <Navbar />
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-4">Paczki doręczamy od ręki!</h1>
                        <p className="lead">Najlepiej prosperująca firma kurierska zapwniamy szeroki zakres usług.</p>
                        <Link className="btn btn-primary btn-sm" to="/" role="button">Poznaj nas bliżej</Link>
                    </div>
                </div>


                <div className="container">
                    <h2 className="font-weight-bold text-center">Śledzenie przesyłki</h2>
                    <h4 className="text-center"> Wpisz numer przesyłki.</h4>
                    <div className="row">
                        <form className="form-signin" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input className="form-control" id="packNumber" placeholder="Wpisz numer paczki" onChange={this.handleChange} required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Prześlij</button>

                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Tracking;