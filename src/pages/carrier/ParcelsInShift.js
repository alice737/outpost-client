import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carrier from '../carrier/Carrier';
import DispatcherNav from '../dispatcher/DispatcherNav';
import CarrierLeftNav from './CarrierLeftNav';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

class  ParcelsInShift extends Component {
  constructor(props) {
    super(props);
    this.state = {

      parcels: []
    };
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    let id = decode(token).user_id;
    
    let url = 'http://193.33.111.170:8080/carrier/'+this.props.match.params.id+'/getShift';
    axios.get(url)
      .then(response => {
        this.setState({
        
      parcels: response.data.parcels
        });

        console.log(response);
        // console.log(this.state.parcels[0].waybill.recipient.name);
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
                  <h1 id="nav-padd" className="h2">Paczki w zmianie </h1>

                </div>

            <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
            {/* <th>Nadawca</th> */}
            <th>Numer Paczki</th>
              <th>Imie Odbiorcy</th>
              <th>Nazwisko Odbiorcy</th>
              <th>Telefon Odbiorcy</th>
              <th>Gabaryt</th>
              <th>Waga</th>
              <th>Więcej</th>

            </tr>
          </thead>
          <tbody>
          {/* {this.state.parcels.filter(item => item.id == this.props.match.params.id).map((item, index) => ( */}
             {this.state.parcels.map((item, index) => (
              <tr key={index}>
              {/* <td> {item.waybill.sender} </td> */} 
              <td> {item.id}</td>
              <td> {item.waybill.recipient.name}</td>
                  <td> {item.waybill.recipient.surname}</td>
                <td> {item.waybill.recipient.telNumber}</td>
                <td> {item.gauge}</td>
                <td> {item.weight}</td>
                   
                <td><Link to={`/parceldetails/${item.id}`}>
                                                <span class="hint--right" aria-label="Więcej!"><i class="fa fa-info fa-2x red-text" aria-hidden="true"></i></span>
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

export default ParcelsInShift;