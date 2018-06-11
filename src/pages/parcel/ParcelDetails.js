import React, { Component } from 'react'
import DispatcherNav from '../dispatcher/DispatcherNav';
import LeftNav from '../dispatcher/LeftNav';
import axios from 'axios';
import { Route, Redirect } from 'react-router'
import decode from 'jwt-decode';
axios.defaults.headers.post['Accept'] ='application/json';
axios.defaults.headers.post['Content-Type'] ="application/json; charset=UTF-8";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
class ParcelDetails extends Component {
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



             
        render() {
            let styl = {
                width: 600,
                margin: 20
    
            };
            let toLeft = {
                float: 'left'
            };
            let toRight = {
                textAlign: 'right'
            };
      
          
            return (
                <div>
                  
               <div className="container-fluid" id="container-wi">
                    <div className="row">
                        <DispatcherNav />
                       
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 id="nav-padd" className="h2">Paczka szczegoły </h1>
                            </div>
                            {/* //this.props.match.params.id */}
                            {this.state.parcels.filter(item => item.id ==this.props.match.params.id  ).map((item, index) => (
                                       
                            <div key={index} class="card" style={styl}>
                                <ul class="list-group list-group-flush" style={toLeft} >
                                <li class="list-group-item"><div style={toLeft}>Id</div><div style={toRight}>{item.id} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Imię odbiorcy</div><div style={toRight}>{item.waybill.recipient.name} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Nazwisko odbiorcy </div><div style={toRight}>{item.waybill.recipient.surname} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Email</div><div style={toRight}>{item.waybill.recipient.email} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Telefon</div><div style={toRight}>{item.waybill.recipient.telNumber} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Ulica</div><div style={toRight}>{item.waybill.recipient.address.house_number} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Numer ulicy</div><div style={toRight}>{item.waybill.recipient.address.street_number} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Miasto</div><div style={toRight}>{item.waybill.recipient.address.city} </div> </li> 
                                    <li class="list-group-item"><div style={toLeft}>Kod pocztowy</div><div style={toRight}>{item.waybill.recipient.address.postal_code} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Waga</div><div style={toRight}>{item.weight} </div> </li>
                                    <li class="list-group-item"><div style={toLeft}>Gabaryt</div><div style={toRight}>{item.gauge} </div> </li> 
                                    <li class="list-group-item"><div style={toLeft}>Status</div><div style={toRight}>{item.status[item.status.length - 1].status} </div> </li> 
                                </ul>
                            </div>))}

                        </main>
                    </div>
                </div>
 
            </div>
        );
    }
}

export default ParcelDetails;