import React, { Component } from 'react'

import axios from 'axios';



class Courier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couriers: []
    };
  }

  componentDidMount() {
    axios.get('http://193.33.111.170/admin/carriers')
      .then(response => {
        this.setState({
          couriers: response.data
        });

        console.log(response);
      }).catch((err) => console.log(err))

  }


  render() {
    return (



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
            {this.state.couriers.map((item, index) => (
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

            {/* <div key={index}>Item {item.personalia.name} {item.surname}</div>; */}
          </tbody>
        </table>
      </div>


    );

  }
}

export default Courier;