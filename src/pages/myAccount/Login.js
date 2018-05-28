

import React, { Component } from 'react'

import MyAccountNav from './MyAccountNav'
import DispatcherNav from '../dispatcher/DispatcherNav';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailLogin: '',
            passwordLogin: '',

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  
    }
    handleChange(e) {
        if (e.target.id === 'emailLogin') {
            this.setState({ emailLogin: e.target.value });
        } else if (e.target.id === 'passwordLogin') {
            this.setState({ passwordLogin: e.target.value });
        } 
    }

    handleSubmitLogin(event) {
        alert('A name was submitted: ' + this.state.emailLogin);
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            //  mode: 'no-cors', // no-cors
            body: JSON.stringify({
                emailLogin: this.state.emailLogin,
                passwordLogin: this.state.passwordLogin,
            })
            ,
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(function(response) {
            if (!response.ok) {
                alert('Sprawdź czy dane są poprawne, nowy pracownik nie został dodany do bazy sproboj jeszcze raz')
                throw Error(response.statusText);
                console.log(response.statusText);
               
            }
            return response;
        }).then(function(response) {
            console.log("ok");
            alert('Zalogowany ')
        }).catch(function(error) {
            <div class="alert alert-success alert-dismissible fade show" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Congratulations!</strong> Now you're ready to do the <a href="#" class="alert-link">next shoelace</a>.
            </div>
               alert('Zły login lub hasło ')
            console.log(error);
            
        });
    }
   

    render() {
        return (
            <div>
            <div className="container-fluid" id="container-wi">
            <div className="row">
            <DispatcherNav/>
               
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2">Zaloguj się </h1>

                            </div>
           
                   
                        <div className="col">

                            <form className="form-signin" onSubmit={this.handleSubmitLogin}>
                                <h1> Logowanie</h1>
                                <p>Wpisz poprawny login i hasło by zalogowac sie do stystemu.</p>
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" id="emailLogin" aria-describedby="emailHelp" placeholder="Wpisz email" onChange={this.handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label >Hasło</label>
                                    <input type="password" suggested="current-password" className="form-control" id="passwordLogin" placeholder="Hasło" onChange={this.handleChange} required />
                                </div>
                                <input type="submit" className="btn btn-primary" value="Prześlij" />
                                <div>
                                    <a href="">Nie pamiętasz hasła? Kliknij aby przypomniec hasło.</a>
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
export default Login ;