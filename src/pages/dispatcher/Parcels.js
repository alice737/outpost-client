import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';

import axios from 'axios';

class Parcels extends Component{
    constructor(props) {
        super(props);
        this.state = {
            parcels: []
        };
    }

    componentDidMount() {
        axios.get('http://193.33.111.170:8080/admin/getParcels')
            .then(response => {
                this.setState({
                    parcels: response.data
                });

                console.log(response);
            }).catch((err) => console.log(err))

    }
    render(){
        return(
            <div>
            <div className="container-fluid" id="container-wi">
            <div className="row">
        <DispatcherNav/>
        <LeftNav/>
         <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 id="nav-padd" className="h2">Paczki</h1>
          
            </div>
  
            <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
            <th>Nadawca</th>
              <th>Imie Odbiorcy</th>
              <th>Nazwisko Odbiorcy</th>
     
              <th>Telefon Odbiorcy</th>
              <th>Email Odbiorcy</th>
              <th>Ulica Odbiorcy</th>
              <th>Numer ulicy Odbiorcy</th>
              <th>Numer domu Odbiorcy</th>
              <th>Miasto Odbiorcy</th>
              <th>Kod pocztowy Odbiorcy</th>
              <th>Gabaryt</th>
              <th>Waga</th>
              <th>Status</th>
              <th>Numer Paczki</th>

            </tr>
          </thead>
          <tbody>
            {this.state.parcels.map((item, index) => (
              <tr key={index}>
              <td> {item.waybill.sender} </td>
                <td> {item.waybill.recipient.name}</td>
                <td> {item.waybill.recipient.surname}</td>
                <td> {item.waybill.recipient.telNumber}</td>
                <td> {item.waybill.recipient.email}</td>
                <td> {item.waybill.recipient.address.street}</td>
                <td> {item.waybill.recipient.address.street_number}</td>
                <td> {item.waybill.recipient.address.house_number}</td>
                <td> {item.waybill.recipient.address.city}</td>
                <td> {item.waybill.recipient.address.postal_code}</td>
                <td> {item.gauge}</td>
                <td> {item.weight}</td>
                
                
                <td> {item.status[item.status.length-1].status} </td>
                <td> {item.id}</td>

              </tr>
            ))}

            {/* <div key={index}>Item {item.personalia.name} {item.surname}</div>; */}
          </tbody>
        </table>
      </div>

          </main>
        </div>
        </div>
        </div>
        );
        
    }
}
 
export default Parcels;