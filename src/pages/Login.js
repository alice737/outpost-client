

import React, { Component } from 'react'
import NavbarDetail from './NavbarDetail'
import Footer from './Footer'
//import '../pagestyle/login.css'
import { Link } from 'react-router-dom';


class Login extends Component {

    render() {
        return (
            <div>
                <NavbarDetail />


                <div className="container" id="container100">
                    <div className="row">
                        <div className="col">
                            <form className="form-signin">
                                <h1> Logowanie</h1>
                                <p>Wpisz poprawny login i hasło by zalogowac sie do stystemu.</p>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Wpisz email" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputPassword1">Hasło</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Hasło" />
                                </div>
                                <Link to="/moje-konto"> <button type="submit" className="btn btn-primary">Prześlij</button></Link>
                                <div>
                                    <a href="">Nie pamiętasz hasła? Kliknij aby przypomniec hasło.</a>
                                </div>
                            </form>
                        </div>

                        <div className="col">
                            <form className="form-signin">
                                <h1> Rejestracja</h1>
                                <p>Zapisz się do systemu.</p>
                                <div className="form-group">
                                    <label for="exampleInputName">Imię</label>
                                    <input type="text" className="form-control" id="exampleInputName" placeholder="Wpisz imię" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputLastName">Nazwisko</label>
                                    <input type="text" className="form-control" id="exampleInputLastName" placeholder="Wpisz nazwisko" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleInputPassword1">Hasło</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Hasło" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword2">Hasło</label>
                                    <input type="password2" className="form-control" id="exampleInputPassword1" placeholder="Powtorz hasło" />
                                </div>


                                <button type="submit" className="btn btn-primary">Prześlij</button>

                            </form>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}
export default Login;