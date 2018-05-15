import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';



class Courier extends Component{
    state = {
        couriers: []
      };
    
    componentDidMount(){
    axios.get('http://localhost:8080/employee/carriers')
    .then(response => {
      this.setState({
couriers: response.data["0"].personalia
      });
     
      console.log(response);
    }).catch((err) => console.log(err))
   
  }

   
    render(){
        let couriers=this.state.couriers
        return(
            
             
               
              <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
               
                  <th>Imie</th>
                  <th>Nazwisko</th>
                  {/* <th>Adres</th> */}
                  <th>Telefon</th>
                </tr>
              </thead>
              <tbody>
              <tr>
               
                  <td> {couriers.name}</td>
                  <td> {couriers.surname}</td>
                  {/* <td> {couriers.address.city}</td> */}
                  <td> {couriers.telNumber}</td>
                </tr>
                
              </tbody>
            </table>
          </div>
               
             
        );
        
    }
}
 
export default Courier;