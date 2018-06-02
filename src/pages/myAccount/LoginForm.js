

import React, { Component } from 'react'

import MyAccountNav from './MyAccountNav'
import NavbarDetail from '../NavbarDetail'
import {  Redirect } from 'react-router'

class LoginForm extends Component {
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
      
        event.preventDefault();
       if(this.state.emailLogin==='admin@gmail.com' && this.state.passwordLogin==='admin')
       {
        localStorage.setItem('token', 'usercostamcostam')
      this.props.onSuccessfulLogin();
    

       }else{
        alert('Sprawdź czy dane są poprawne')
       
       }
        // fetch('', {
        //     method: 'POST',
        //     //  mode: 'no-cors', // no-cors
        //     body: JSON.stringify({
        //         emailLogin: this.state.emailLogin,
        //         passwordLogin: this.state.passwordLogin,
        //     })
        //     ,
        //     headers: {
        //         'Accept': 'application/json',
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })
        // .then(function(response) {
        //     if (!response.ok) {
        //         localStorage.setItem('token', 'usercostamcostam')
          
        //         alert('Sprawdź czy dane są poprawne')
        //         throw Error(response.statusText);
        //        // console.log(response.statusText);
             
               
        //     }
        //     return response;
        // }).then(function(response) {
        //     console.log("ok");
        //     alert('Zalogowany ')
        //     //autoryzacja przekierownaie
        //     // const location = this.props.location
        //     // if (location.state && location.state.nextPathname) {
        //     //   history.push(location.state.nextPathname)
        //     // } else {
        //     // history.push('/')
           
        //    // }
        // }).catch(function(error) {
        
        //        alert('Zły login lub hasło ')
        //     console.log(error);
            
        // });
    }
    
   

    render() {

   
        return (
         
             
           
                   
                        <div className="col">

                            (<form className="form-signin"  id="container100" onSubmit={this.handleSubmitLogin}>
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

        );
    }
}
export default LoginForm ;