import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
import axios from 'axios';
import Carrier from '../carrier/Carrier';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

class CarriersInShift extends Component {
  constructor(props) {
    super(props);
    this.state = {

      carriers: {}
    };
  }

  componentWillMount() {
    let url = 'http://localhost:8080/dispatcher/' + this.props.match.params.id + '/getCarrierFromShift';


    axios.get(url)
      .then(response => {
        this.setState({

          carriers: response.data
        });

        console.log(response);
      }).catch((err) => console.log(err))

  }


  isAuthenticated() {
    const token = localStorage.getItem('token');
    //  let role=decode(token).role;
    if (token && token.length > 10) {
      let role = decode(token).roles;
      console.log(role)
      if (role === 'ROLE_DISPATCHER') {
        return role;
      } else {
        return !token && token.length > 10;

      }

    } else {
      return token && token.length > 10;
    }

  }
  render() {
    const carr = this.state.carriers;
    const isArleadyAuthenticated = this.isAuthenticated();
    return (
      <div>
        {(isArleadyAuthenticated === 'ROLE_DISPATCHER') ?
          (<div className="container-fluid" id="container-wi">
            <div className="row">
              <DispatcherNav />
              <LeftNav />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <h1 id="nav-padd" className="h2">Kurier - zmiana </h1>

                </div>

                <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>

                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Telefon</th>
                        

                      </tr>
                    </thead>
                    <tbody>
                      {carr.id ?
                        (<tr >
                          <td> {this.state.carriers.personalia.name}</td>
                          <td> {this.state.carriers.personalia.surname}</td>
                          <td> {this.state.carriers.personalia.telNumber}</td>
                        

                        </tr>) :

                        ('Zmiana nie ma przypisanego kuriera... ')}


                    </tbody>
                  </table>
                </div>
              </main>
            </div>
          </div>) :
          (<Redirect to={{ pathname: '/login' }} />)}
      </div>


    );

  }
}

export default CarriersInShift;