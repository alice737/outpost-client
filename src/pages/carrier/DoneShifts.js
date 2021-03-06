import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
import axios from 'axios';
import DispatcherNav from '../dispatcher/DispatcherNav';
import CarrierLeftNav from './CarrierLeftNav';
import Carrier from '../carrier/Carrier';
import { Link } from 'react-router-dom';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";


class DoneShifts extends Component {
  constructor(props) {
    super(props);
    this.state = {

      shifts: []
    };
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    let role = decode(token).user_id;
 
    let url = 'http://localhost:8080/carrier/' + role + '/getMyShift/DONE';
    axios.get(url)
      .then(response => {
        this.setState({

          shifts: response.data
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
      if (role === 'ROLE_CARRIER') {
        return role;
      } else {
        return !token && token.length > 10;

      }

    } else {
      return token && token.length > 10;
    }

  }
  render() {
    const isArleadyAuthenticated = this.isAuthenticated();
    return (
      <div>
        {(isArleadyAuthenticated === 'ROLE_CARRIER') ?
          (<div className="container-fluid" id="container-wi">
            <div className="row">
              <DispatcherNav />
              <CarrierLeftNav />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                  <h1 id="nav-padd" className="h2">Moje zmiany </h1>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Nazwa</th>
                        <th>Paczki ilośc</th>
                        <th>Paczki szczegoły</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.shifts.map((item, index) => (
                        <tr key={index}>
                          <td> {item.id}</td>
                          <td> {item.name}</td>
                          <td> {item.parcels.length}</td>
                    
                          <td><Link to={`/parcelsInShift/${item.id}`}>
                                                <span class="hint--right" aria-label="Paczki!"><i class="fa fa-info fa-2x red-text" aria-hidden="true"></i></span>
                                                </Link></td> 
                        </tr>
                      ))}
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

export default DoneShifts;