import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
import axios from 'axios';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');


class Courier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couriers: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/admin/carriers')
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
              
            </tr>
          </thead>
          <tbody>
            {this.state.couriers.map((item, index) => (
              <tr key={index}>
                <td> {item.personalia.name}</td>
                <td> {item.personalia.surname}</td>
                <td> {item.personalia.telNumber}</td>

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