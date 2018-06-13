
import React, { Component } from 'react'
import decode from 'jwt-decode';
import MyAccountNav from './MyAccountNav'
import NavbarDetail from '../NavbarDetail'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailLogin: '',
            passwordLogin: '',
            token: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange(e) {
        if (e.target.id === 'emailLogin') {
            this.setState({ emailLogin: e.target.value });
        } else if (e.target.id === 'passwordLogin') {
            this.setState({ passwordLogin: e.target.value });
        }
    }

    handleSubmit() {
        this.props.onSuccessfulLogin();
    }
    getProfile() {
   
        return decode(this.getToken());
    }


    handleSubmitLogin(event) {
        let token;
        event.preventDefault();
        axios.post('http://localhost:8080/guest/login', {
            login: this.state.emailLogin,
            pass: this.state.passwordLogin
        }).then((response) => {

            token = response.data;
            localStorage.setItem('token', token);
            console.log(decode(token));
            this.props.onSuccessfulLogin();
            console.log("ok");

        }).catch(function (error) {
            alert('Sprawdź czy dane są poprawne, nowy pracownik nie został dodany do bazy sproboj jeszcze raz')
          console.log(error);
        });
    }
    render() {
        return (
            <div className="col">

                (<form className="form-signin" id="container100" onSubmit={this.handleSubmitLogin}>
                    <h1> Logowanie</h1>
                    <p>Wpisz poprawny login i hasło by zalogowac sie do stystemu.</p>
                    <div className="form-group">
                        <label >Login</label>
                        <input type="text" className="form-control" id="emailLogin" placeholder="Wpisz login" onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label >Hasło</label>
                        <input type="password" suggested="current-password" className="form-control" id="passwordLogin" placeholder="Hasło" onChange={this.handleChange} required />
                    </div>
                    <input type="submit" className="btn btn-primary" value="Prześlij" />
                    
                </form>
            </div>

        );
    }
}
export default LoginForm;