import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom';


class Tracking extends Component {
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
                        <form className="form-signin">
                            <div className="form-group">
                                <label for="packNumber"></label>
                                <input className="form-control" id="packNumber" placeholder="Wpisz numer paczki" />
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