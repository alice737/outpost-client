import React, { Component } from 'react'

import axios from 'axios';
import Carrier from '../carrier/Carrier';
import DispatcherNav from './DispatcherNav';
import LeftNav from './LeftNav';


class CarriersInShift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: [],
      carriers:[]
    };
  }

  componentDidMount() {
    let url = 'http://193.33.111.170:8080/dispatcher/'+this.props.match.params.id+'/getShift'  ;
    axios.get(url)
      .then(response => {
        this.setState({
          shift: response.data,
          carriers: response.data.carriers
        });

        console.log(response);
      }).catch((err) => console.log(err))

  }


  render() {
    return (

        <div>
        <div className="container-fluid" id="container-wi">
            <div className="row">
                <DispatcherNav />
                <LeftNav />
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <h1 id="nav-padd" className="h2">Kurierzy zmiana {this.state.shift.name}</h1>

                    </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>

              <th>Imie</th>
              <th>Nazwisko</th>
              <th>Telefon</th>
              <th>Ulica</th>
              <th>Numer ulicy</th>
              <th>Numer domu</th>
              <th>Miasto</th>
              <th>Kod pocztowy</th>

            </tr>
          </thead>
          <tbody>
            {this.state.carriers.map((item, index) => (
              <tr key={index}>
                <td> {item.personalia.name}</td>
                <td> {item.personalia.surname}</td>
                <td> {item.personalia.telNumber}</td>
                <td> {item.personalia.address.street}</td>
                <td> {item.personalia.address.street_number}</td>
                <td> {item.personalia.address.house_number}</td>
                <td> {item.personalia.address.city}</td>
                <td> {item.personalia.address.postal_code}</td>

              </tr>
            ))}

         
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

export default CarriersInShift;